// src/infra/RoomRepositoryFirebase.js
import { db } from '@/config/firebase';
import {
    doc, onSnapshot, runTransaction, setDoc, serverTimestamp,
    collection, getDocs, query, where, limit
} from 'firebase/firestore';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const genCode = (len = 6) =>
    Array.from({ length: len }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');

export function roomRepository(roomId) {
    const roomRef = doc(db, 'rooms', roomId);

    const watch = (cb) => {
        return onSnapshot(roomRef, (snap) => {
            if (!snap.exists()) return cb(null);
            const d = snap.data();
            cb({
                colors: d.colors || [],
                customColors: d.customColors || {},
                history: d.history || [],
                flash: d.flash || null,
                code: d.code || ''
            });
        });
    };

    const initIfNeeded = async (isAdmin, initialColors = [], customColors = {}) => {
        if (!isAdmin) return;
        await setDoc(roomRef, {
            colors: initialColors,
            customColors,
            history: [],
            updatedAt: serverTimestamp()
        }, { merge: true });
    };

    const txUpdate = (updateFn) =>
        runTransaction(db, async (tx) => {
            const s = await tx.get(roomRef);
            const d = s.exists() ? s.data() : { colors: [], history: [], customColors: {}, flash: null };
            const next = updateFn({
                colors: d.colors || [],
                history: d.history || [],
                customColors: d.customColors || {},
                flash: d.flash || null
            });
            tx.set(roomRef, { ...next, updatedAt: serverTimestamp() }, { merge: true });
        });

    const addColor = async (color) => {
        await txUpdate(({ colors, history, customColors, flash }) => {
            if (colors.includes(color)) return { colors, history, customColors, flash };
            return { colors: [...colors, color], history, customColors, flash };
        });
    };

    const removeColor = async (color) => {
        await txUpdate(({ colors, history, customColors }) => {
            const nextColors = colors.filter(c => c !== color);
            const nextCustom = { ...customColors };
            delete nextCustom[color];
            return { colors: nextColors, history, customColors: nextCustom, flash: null };
        });
    };

    const updateCustomColor = async (name, hex) => {
        await txUpdate(({ colors, history, customColors, flash }) => ({
            colors, history, flash, customColors: { ...customColors, [name]: hex }
        }));
    };

    const pushHistoryAndFlash = async (selected, by, blinkMs) => {
        const now = Date.now();
        await txUpdate(({ colors, history, customColors }) => {
            if (!colors.includes(selected)) {
                return { colors, history, customColors, flash: null };
            }
            const nextHistory = [...(history || []), { color: selected, ts: now, by }];
            return {
                colors, history: nextHistory, customColors,
                flash: { color: selected, ts: now, duration: blinkMs }
            };
        });
        return now;
    };

    const removeAfterFlashIfNotLast = async (selected) => {
        await txUpdate(({ colors, history, customColors, flash }) => {
            const sameFlash = flash && flash.color === selected;
            const nextColors = colors.length === 1 ? colors : colors.filter(c => c !== selected);
            return { colors: nextColors, history, customColors, flash: sameFlash ? null : flash };
        });
    };

    const reset = async () => {
        await txUpdate(({ colors, history, customColors }) => {
            const all = [...new Set([...colors, ...history.map(h => h.color)])];
            return { colors: all, history: [], customColors, flash: null };
        });
    };

    const ensureRoomCode = async (isAdmin) => {
        const snap = await getDocs(query(collection(db, 'codes'), where('roomId', '==', roomId), limit(1)));
        let codeFound = snap.empty ? '' : snap.docs[0].id;

        if (!codeFound && isAdmin) {
            await runTransaction(db, async (tx) => {
                for (let i = 0; i < 5; i++) {
                    const tryCode = genCode(6);
                    const codeRef = doc(db, 'codes', tryCode);
                    const cs = await tx.get(codeRef);
                    if (!cs.exists()) {
                        codeFound = tryCode;
                        tx.set(codeRef, { roomId, createdAt: serverTimestamp() });
                        tx.set(roomRef, { code: codeFound }, { merge: true });
                        return;
                    }
                }
                throw new Error('No se pudo generar código único.');
            });
        } else if (codeFound) {
            await setDoc(roomRef, { code: codeFound }, { merge: true });
        }
        return codeFound;
    };

    const createRoom = async ({ initialColors = [], customColors = {} } = {}) => {
        // 1) Generar roomId sencillo (fecha+random) – o usa pushId/uuid si prefieres
        const newRoomId = `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
        const newRoomRef = doc(db, 'rooms', newRoomId);

        // 2) Crear doc de la sala
        await setDoc(newRoomRef, {
            colors: initialColors,
            customColors,
            history: [],
            updatedAt: serverTimestamp()
        }, { merge: true });

        // 3) Generar/Reservar código único en 'codes'
        const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        const genCode = (len = 6) =>
            Array.from({ length: len }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');

        let codeFound = '';
        await runTransaction(db, async (tx) => {
            for (let i = 0; i < 5; i++) {
                const tryCode = genCode(6);
                const codeRef = doc(db, 'codes', tryCode);
                const cs = await tx.get(codeRef);
                if (!cs.exists()) {
                    codeFound = tryCode;
                    tx.set(codeRef, { roomId: newRoomId, createdAt: serverTimestamp() });
                    tx.set(newRoomRef, { code: codeFound }, { merge: true });
                    return;
                }
            }
            throw new Error('No se pudo generar código único.');
        });

        return { roomId: newRoomId, code: codeFound };
    };

    const resolveRoomIdByCode = async (code) => {
        const codeDoc = await getDocs(
            query(collection(db, 'codes'), where('__name__', '==', code), limit(1))
        );
        if (codeDoc.empty) return null;
        const snap = codeDoc.docs[0];
        const data = snap.data();
        return data?.roomId ?? null;
    };

    return {
        watch,
        initIfNeeded,
        addColor,
        removeColor,
        updateCustomColor,
        pushHistoryAndFlash,
        removeAfterFlashIfNotLast,
        reset,
        ensureRoomCode,
        createRoom,
        resolveRoomIdByCode
    };
}
