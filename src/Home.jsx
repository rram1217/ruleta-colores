import React, { useState } from 'react';
import { db } from './firebase';
import {
    doc, setDoc, getDoc, runTransaction, serverTimestamp
} from 'firebase/firestore';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sin I/O/1/0 para evitar confusión
const genCode = (len = 6) =>
    Array.from({ length: len }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');

const Home = () => {
    const [creating, setCreating] = useState(false);
    const [joining, setJoining] = useState(false);
    const [creatorName, setCreatorName] = useState('');
    const [joinCode, setJoinCode] = useState('');
    const [error, setError] = useState('');

    const baseUrl = window.location.origin + window.location.pathname;

    // Crea un roomId (uid-like) sencillo
    const genRoomId = () => crypto.randomUUID ? crypto.randomUUID() : `room_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    const createRoom = async () => {
        setError('');
        const who = creatorName.trim();
        if (!who) { setError('Escribe tu nombre (administrador)'); return; }

        setCreating(true);
        try {
            const roomId = genRoomId();

            // 1) Crear doc de la sala con estado inicial
            await setDoc(doc(db, 'rooms', roomId), {
                colors: ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Blanco/Morado', 'Negro', 'Rosa'],
                customColors: {},
                history: [],
                createdBy: who,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            }, { merge: true });

            // 2) Generar código único y reservarlo en /codes/{CODE}
            let code = '';
            await runTransaction(db, async (tx) => {
                // intentar hasta conseguir uno libre (colisiones extremadamente raras)
                for (let i = 0; i < 5; i++) {
                    const tryCode = genCode(6);
                    const codeRef = doc(db, 'codes', tryCode);
                    const snap = await tx.get(codeRef);
                    if (!snap.exists()) {
                        code = tryCode;
                        tx.set(codeRef, { roomId, createdAt: serverTimestamp() });
                        return;
                    }
                }
                throw new Error('No se pudo generar un código único. Intenta de nuevo.');
            });

            // 3) Guardar el código también dentro del doc de la sala
            await setDoc(doc(db, 'rooms', roomId), { code }, { merge: true });


            // 3) Mostrar links rápidos
            const adminUrl = `${baseUrl}?room=${roomId}`;
            const publicUrl = `${baseUrl}?room=${roomId}&mode=public`;
            alert(
                `✅ Sala creada\n\n` +
                `Código: ${code}\n\n` +
                `Link ADMIN: ${adminUrl}\n` +
                `Link PÚBLICO: ${publicUrl}\n\n` +
                `Comparte el CÓDIGO con tus amigos; ellos entran como invitados.`
            );

            // 4) Redirigir al admin a su sala
            window.location.href = adminUrl;
        } catch (e) {
            console.error(e);
            setError(e.message || 'Error creando la sala');
        } finally {
            setCreating(false);
        }
    };

    const joinByCode = async () => {
        setError('');
        const code = joinCode.trim().toUpperCase();
        if (!code) { setError('Escribe el código de la sala'); return; }

        setJoining(true);
        try {
            const codeRef = doc(db, 'codes', code);
            const snap = await getDoc(codeRef);
            if (!snap.exists()) {
                setError('Código no válido o sala no encontrada');
                return;
            }
            const { roomId } = snap.data() || {};
            if (!roomId) {
                setError('Código inválido');
                return;
            }
            // Invitado → modo público
            window.location.href = `${baseUrl}?room=${encodeURIComponent(roomId)}&mode=public`;
        } catch (e) {
            console.error(e);
            setError('No se pudo validar el código');
        } finally {
            setJoining(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">🎮 Ruleta de Colores</h1>
                <p className="text-gray-600 mb-6">Crea una sala nueva o entra con un código.</p>

                {/* Crear sala */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-3">Crear sala (Admin)</h2>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tu nombre</label>
                        <input
                            type="text"
                            value={creatorName}
                            onChange={(e) => setCreatorName(e.target.value)}
                            placeholder="Escribe tu nombre"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            onClick={createRoom}
                            disabled={creating}
                            className={`mt-3 w-full py-2 rounded-lg text-white font-medium ${creating ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                                }`}
                        >
                            {creating ? 'Creando...' : 'Crear sala'}
                        </button>
                        <p className="text-xs text-gray-500 mt-2">
                            Al crear se generará un <strong>código</strong> para compartir y links directo admin/público.
                        </p>
                    </div>

                    {/* Entrar con código */}
                    <div className="border rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-3">Entrar con código (Invitado)</h2>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Código</label>
                        <input
                            type="text"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                            placeholder="Ej: 7GQ2XA"
                            className="w-full px-3 py-2 border rounded-lg tracking-widest text-center uppercase focus:outline-none focus:ring-2 focus:ring-purple-500"
                            maxLength={6}
                        />
                        <button
                            onClick={joinByCode}
                            disabled={joining}
                            className={`mt-3 w-full py-2 rounded-lg text-white font-medium ${joining ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {joining ? 'Entrando...' : 'Entrar'}
                        </button>
                        <p className="text-xs text-gray-500 mt-2">
                            Pide el código a quien creó la sala y pégalo aquí.
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="mt-6 p-3 rounded border border-red-200 bg-red-50 text-red-700">
                        {error}
                    </div>
                )}

                <div className="mt-8 p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-sm text-blue-800">
                        Consejo: también puedes entrar con links directos <code>?room=…</code> (admin) o <code>?room=…&mode=public</code> (invitado).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
