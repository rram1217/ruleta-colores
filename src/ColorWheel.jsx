import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Plus, RotateCw, Share2, RefreshCw } from 'lucide-react';
import { db } from './firebase';
import {
    doc, onSnapshot, runTransaction, setDoc, serverTimestamp,
    collection, getDocs, query, where, limit
} from 'firebase/firestore';

/** Mapa de colores reutilizable para toda la UI */
const COLOR_MAP = {
    'Rojo': '#dc2626', 'Azul': '#2563eb', 'Verde': '#16a34a',
    'Amarillo': '#eab308', 'Naranja': '#ea580c', 'Morado': '#9333ea',
    'Blanco/Morado': '#9333ea', // por defecto morado para esta opción
    'Rosa': '#ec4899', 'Violeta': '#7c3aed', 'Cyan': '#0891b2',
    'Negro': '#1f2937', 'Blanco': '#FFFFFF', 'Gris': '#6b7280',
    'Celeste': '#0ea5e9', 'Turquesa': '#14b8a6', 'Lima': '#84cc16',
    'Dorado': '#f59e0b', 'Plateado': '#9ca3af', 'Marrón': '#92400e',
    'Café': '#78350f', 'Beige': '#d6d3d1', 'Coral': '#f97316',
    'Magenta': '#d946ef', 'Índigo': '#4f46e5', 'Lavanda': '#a78bfa',
    'Rojo Oscuro': '#991b1b', 'Azul Claro': '#60a5fa', 'Verde Claro': '#4ade80',
    'Amarillo Claro': '#fde047', 'Rosa Claro': '#f9a8d4', 'Morado Claro': '#c084fc',
    'Verde Oscuro': '#15803d', 'Azul Oscuro': '#1e40af', 'Naranja Claro': '#fb923c',
    'Esmeralda': '#10b981', 'Rubí': '#be123c', 'Zafiro': '#1e40af',
    'Ámbar': '#f59e0b', 'Jade': '#059669', 'Carmesí': '#dc2626'
};

const ColorWheel = () => {
    const [colors, setColors] = useState(['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Blanco/Morado', 'Negro', 'Rosa']);
    const [newColor, setNewColor] = useState('');
    const [customColors, setCustomColors] = useState({});
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [history, setHistory] = useState([]);
    const [rotation, setRotation] = useState(0);
    const [playerName, setPlayerName] = useState('');
    const [flash, setFlash] = useState(null); // { color, ts, duration }
    const wheelRef = useRef(null);
    const [roomCode, setRoomCode] = useState('');

    // 0° = arriba. Ajusta ±1..3° si notaras micro-desfase visual.
    const POINTER_ZERO_DEG = 0;

    // Modo / sala
    const params = new URLSearchParams(window.location.search);
    const isPublicMode = params.get('mode') === 'public';
    const isAdmin = !isPublicMode;
    const roomId = params.get('room') || 'default';
    const roomRef = doc(db, 'rooms', roomId);

    // Nombre persistido
    useEffect(() => {
        const saved = localStorage.getItem('wheelPlayerName') || '';
        setPlayerName(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem('wheelPlayerName', playerName || '');
    }, [playerName]);

    // Suscripción Firestore
    useEffect(() => {
        const initIfNeeded = async () => {
            if (!isAdmin) return;
            await setDoc(
                roomRef,
                { colors, customColors, history: [], updatedAt: serverTimestamp() },
                { merge: true }
            );
        };

        const unsub = onSnapshot(roomRef, snap => {
            if (snap.exists()) {
                const d = snap.data();
                setColors(d.colors || []);
                setCustomColors(d.customColors || {});
                setHistory(d.history || []);
                setFlash(d.flash || null);
                setRoomCode(d.code || ''); // ← NUEVO
            } else {
                initIfNeeded();
            }
        });

        const ensureRoomCode = async () => {
            if (!isAdmin) return;
            if (roomCode) return; // ya hay code

            // intenta encontrar un code existente en la colección codes (caso salas creadas con el lobby)
            const qSnap = await getDocs(
                query(collection(db, 'codes'), where('roomId', '==', roomId), limit(1))
            );
            let codeFound = qSnap.empty ? '' : qSnap.docs[0].id;

            if (!codeFound) {
                // generar uno nuevo y reservarlo
                const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
                const genCode = (len = 6) =>
                    Array.from({ length: len }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');

                await runTransaction(db, async (tx) => {
                    for (let i = 0; i < 5; i++) {
                        const tryCode = genCode(6);
                        const codeRef = doc(db, 'codes', tryCode);
                        const snap = await tx.get(codeRef);
                        if (!snap.exists()) {
                            codeFound = tryCode;
                            tx.set(codeRef, { roomId, createdAt: serverTimestamp() });
                            return;
                        }
                    }
                    throw new Error('No se pudo generar un código único.');
                });
            }

            // guarda el code en la sala y en estado
            await setDoc(roomRef, { code: codeFound }, { merge: true });
            setRoomCode(codeFound);
        };

        // Llamada (no bloqueante)
        ensureRoomCode().catch(console.error);

        return () => unsub();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId, isAdmin]);

    // Helper transaccional
    const txUpdate = (updateFn) =>
        runTransaction(db, async (tx) => {
            const s = await tx.get(roomRef);
            const d = s.exists() ? s.data() : { colors: [], history: [], customColors: {}, flash: null };
            const next = updateFn({
                colors: d.colors || [],
                history: d.history || [],
                customColors: d.customColors || {},
                flash: d.flash || null,
            });
            tx.set(roomRef, { ...next, updatedAt: serverTimestamp() }, { merge: true });
        });

    const addColor = async () => {
        if (!isAdmin) return;
        const c = newColor.trim();
        if (!c) return;
        await txUpdate(({ colors, history, customColors, flash }) => {
            if (colors.includes(c)) return { colors, history, customColors, flash };
            return { colors: [...colors, c], history, customColors, flash };
        });
        setNewColor('');
    };

    const removeColor = async (colorToRemove) => {
        if (!isAdmin) return;
        await txUpdate(({ colors, history, customColors }) => {
            const nextColors = colors.filter(c => c !== colorToRemove);
            const nextCustom = { ...customColors };
            delete nextCustom[colorToRemove];
            return { colors: nextColors, history, customColors: nextCustom, flash: null };
        });
    };

    const updateCustomColor = async (colorName, hexColor) => {
        if (!isAdmin) return;
        await txUpdate(({ colors, history, customColors, flash }) => ({
            colors,
            history,
            flash,
            customColors: { ...customColors, [colorName]: hexColor }
        }));
    };

    // === Derivados para habilitar/bloquear giro ===
    const playerOk = (playerName || '').trim().length > 0;

    // Si queda 1 color y ya está en el historial, el juego terminó.
    const lastColorAlreadyChosen =
        colors.length === 1 && history?.some(h => h.color === colors[0]);

    const gameFinished = lastColorAlreadyChosen;

    const canSpin = colors.length > 0 && !isSpinning && playerOk && !gameFinished;

    // Giro: aleatorio + ganador por redondeo al centro
    const spinWheel = () => {
        const who = (playerName || '').trim();
        if (!who) { alert('Por favor, escribe tu nombre antes de girar.'); return; }
        if (colors.length === 0 || isSpinning) return;

        // guard extra: no permitir giros cuando ya finalizó
        if (colors.length === 1 && history?.some(h => h.color === colors[0])) {
            alert('El juego ya terminó 🎉 No hay colores nuevos por sacar.');
            return;
        }

        setIsSpinning(true);
        setSelectedColor('');

        const spins = 5 + Math.random() * 5;
        const finalRotation = rotation + spins * 360 + Math.random() * 360;
        setRotation(finalRotation);

        const BLINK_DURATION = 1200;
        const REMOVE_DELAY = BLINK_DURATION + 100;

        setTimeout(async () => {
            const n = colors.length;
            if (n === 0) { setIsSpinning(false); return; }
            const seg = 360 / n;

            const norm = ((finalRotation % 360) + 360) % 360;
            const angleAtPointer = ((POINTER_ZERO_DEG - norm) % 360 + 360) % 360;

            let selectedIndex = Math.round(angleAtPointer / seg) % n;
            if (selectedIndex < 0) selectedIndex += n;

            const selected = colors[selectedIndex];
            const now = Date.now();

            // 1) historia + flash (parpadeo)
            await txUpdate(({ colors: curr, history, customColors }) => {
                if (!curr.includes(selected)) {
                    return { colors: curr, history, customColors, flash: null };
                }
                const nextHistory = [...(history || []), { color: selected, ts: now, by: who }];
                return {
                    colors: curr,
                    history: nextHistory,
                    customColors,
                    flash: { color: selected, ts: now, duration: BLINK_DURATION }
                };
            });

            setSelectedColor(selected);
            setIsSpinning(false);

            // 2) quitar color luego de parpadear (excepto el último)
            setTimeout(async () => {
                await txUpdate(({ colors: curr, history, customColors, flash }) => {
                    const sameFlash = flash && flash.color === selected;
                    const nextColors = curr.length === 1 ? curr : curr.filter(c => c !== selected);
                    return {
                        colors: nextColors,
                        history,
                        customColors,
                        flash: sameFlash ? null : flash
                    };
                });
            }, REMOVE_DELAY);
        }, 3000);
    };

    // Dibujo de la ruleta — offset -seg/2 y caso 1 color = círculo
    const getWheelSegments = () => {
        if (colors.length === 1) {
            const color = colors[0];
            const segmentColor = customColors[color] || COLOR_MAP[color] || `hsl(0, 70%, 50%)`;
            const isBlinking = flash && flash.color === color;

            return (
                <g key={color}>
                    <circle
                        cx="150" cy="150" r="140"
                        className={isBlinking ? 'blink-twice' : ''}
                        fill={segmentColor} stroke="#fff" strokeWidth="3"
                    />
                    <text
                        x="150" y="150"
                        textAnchor="middle" dominantBaseline="middle"
                        fill="white" fontSize="18" fontWeight="bold"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                    >
                        {color}
                    </text>
                </g>
            );
        }

        const segmentAngle = 360 / Math.max(colors.length, 1);
        const drawOffset = -segmentAngle / 2;

        return colors.map((color, index) => {
            const startAngle = index * segmentAngle + drawOffset;
            const endAngle = (index + 1) * segmentAngle + drawOffset;
            const largeArcFlag = segmentAngle > 180 ? 1 : 0;

            const x1 = 150 + 140 * Math.cos((startAngle - 90) * Math.PI / 180);
            const y1 = 150 + 140 * Math.sin((startAngle - 90) * Math.PI / 180);
            const x2 = 150 + 140 * Math.cos((endAngle - 90) * Math.PI / 180);
            const y2 = 150 + 140 * Math.sin((endAngle - 90) * Math.PI / 180);

            const pathData = [
                `M 150 150`,
                `L ${x1} ${y1}`,
                `A 140 140 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
            ].join(' ');

            const labelAngle = startAngle + segmentAngle / 2;

            const segmentColor =
                customColors[color] ||
                COLOR_MAP[color] ||
                `hsl(${index * 360 / Math.max(colors.length, 1)}, 70%, 50%)`;

            const isBlinking = flash && flash.color === color;

            return (
                <g key={color}>
                    <path
                        d={pathData}
                        className={isBlinking ? 'blink-twice' : ''}
                        fill={segmentColor}
                        stroke="#fff"
                        strokeWidth="3"
                    />
                    <text
                        x={150 + 80 * Math.cos((labelAngle - 90) * Math.PI / 180)}
                        y={150 + 80 * Math.sin((labelAngle - 90) * Math.PI / 180)}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="bold"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                    >
                        {color}
                    </text>
                </g>
            );
        });
    };

    const resetGame = async () => {
        if (!isAdmin) return;
        await txUpdate(({ colors, history, customColors }) => {
            const all = [...new Set([...colors, ...history.map(h => h.color)])];
            return { colors: all, history: [], customColors, flash: null };
        });
        setSelectedColor('');
        setRotation(0);
    };

    const sharePublicLink = () => {
        const base = window.location.href.split('?')[0];
        const url = `${base}?room=${roomId}&mode=public`;
        navigator.clipboard.writeText(url).catch(() => { });
        alert('¡Link público copiado! ' + url);
    };

    const shareAdminLink = () => {
        const base = window.location.href.split('?')[0];
        const url = `${base}?room=${roomId}`;
        navigator.clipboard.writeText(url).catch(() => { });
        alert('¡Link admin copiado! ' + url);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
            {/* estilos parpadeo */}
            <style>{`
        @keyframes blinkTwice {
          0%   { opacity: 1; transform: scale(1); }
          20%  { opacity: 0.4; transform: scale(1.02); }
          40%  { opacity: 1; transform: scale(1); }
          60%  { opacity: 0.4; transform: scale(1.02); }
          80%  { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .blink-twice { animation: blinkTwice 1.2s ease-in-out; }
      `}</style>

            <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        🎯 Ruleta de Colores
                        {isPublicMode && <span className="text-lg text-blue-600 font-normal"> - Modo Invitado</span>}
                        {isAdmin && <span className="text-lg text-green-600 font-normal"> - Modo Administrador</span>}
                    </h1>
                    <p className="text-gray-600">
                        {isPublicMode ? "¡Gira la ruleta y diviértete! Solo puedes girar, no modificar colores."
                            : "Agrega colores, gira la ruleta y comparte con tus amigos"}
                    </p>
                    <p className="text-xs text-gray-500">Sala: <code>{roomId}</code></p>
                </div>

                {isAdmin && roomCode && (
                    <div className="mt-3 inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-800 px-3 py-1.5 rounded-lg">
                        <span className="text-sm">Código de sala:</span>
                        <code className="font-semibold tracking-widest">{roomCode}</code>
                        <button
                            onClick={async () => {
                                try {
                                    await navigator.clipboard.writeText(roomCode);
                                    alert(`Código copiado: ${roomCode}`);
                                } catch {
                                    alert(`Código: ${roomCode}`);
                                }
                            }}
                            className="ml-2 text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded"
                            title="Copiar código"
                        >
                            Copiar
                        </button>
                    </div>
                )}

                {/* Nombre */}
                <div className="mb-4 max-w-md mx-auto">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tu nombre (requerido para girar)</label>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Escribe tu nombre..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Controles admin */}
                {isAdmin && (
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <button onClick={sharePublicLink} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            <Share2 size={16} /> Compartir Link Público
                        </button>
                        <button onClick={shareAdminLink} className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                            <Share2 size={16} /> Compartir Link Admin
                        </button>
                        <button onClick={resetGame} className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                            <RefreshCw size={16} /> Reiniciar Juego
                        </button>
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Ruleta */}
                    <div className="text-center">
                        <div className="relative inline-block mb-4">
                            {colors.length > 0 ? (
                                <>
                                    <svg width="300" height="300" className="drop-shadow-lg">
                                        <g
                                            ref={wheelRef}
                                            style={{
                                                transform: `rotate(${rotation}deg)`,
                                                transformOrigin: '150px 150px',
                                                transition: isSpinning ? 'transform 3s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
                                            }}
                                        >
                                            {getWheelSegments()}
                                        </g>
                                    </svg>

                                    {/* Puntero */}
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="relative">
                                            <div className="absolute top-1 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-black opacity-30"></div>
                                            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-600 relative z-10"></div>
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                                    <p className="text-gray-500 text-center">
                                        {isAdmin ? 'Agrega colores\npara comenzar' : 'No hay colores\ndisponibles'}
                                    </p>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={spinWheel}
                            disabled={!canSpin}
                            className={`w-32 h-32 rounded-full text-white font-bold text-lg shadow-lg transform transition-all ${!canSpin
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : colors.length === 1
                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 hover:scale-105 active:scale-95'
                                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95'
                                }`}
                            title={
                                !playerOk
                                    ? 'Escribe tu nombre para poder girar'
                                    : gameFinished
                                        ? 'Juego finalizado'
                                        : 'Girar la ruleta'
                            }
                        >
                            {isSpinning ? (
                                <RotateCw className="animate-spin mx-auto" size={24} />
                            ) : gameFinished ? (
                                <div className="text-center">
                                    <div>🏁</div>
                                    <div className="text-xs">FINALIZADO</div>
                                </div>
                            ) : colors.length === 1 ? (
                                <div className="text-center">
                                    <div>🏆</div>
                                    <div className="text-xs">FINAL</div>
                                </div>
                            ) : (
                                'GIRAR'
                            )}
                        </button>

                        {gameFinished && (
                            <div className="mt-3 text-sm text-yellow-700 bg-yellow-100 border border-yellow-200 rounded p-2">
                                🎉 Juego finalizado: ya se han extraído todos los colores.
                            </div>
                        )}

                        {selectedColor && (
                            <div className={`mt-4 p-4 border rounded-lg ${colors.length === 1 ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300' : 'bg-green-100 border-green-300'
                                }`}>
                                <h3 className={`text-lg font-bold ${colors.length === 1 ? 'text-yellow-800' : 'text-green-800'}`}>
                                    {colors.length === 1 ? '🏆 ¡COLOR FINAL!' : '¡Resultado!'}
                                </h3>
                                <p className={`text-2xl font-bold ${colors.length === 1 ? 'text-yellow-900' : 'text-green-900'}`}>{selectedColor}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Sacado por: <span className="font-semibold">{(playerName || '').trim()}</span>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Panel derecho */}
                    <div>
                        {isAdmin && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Agregar Color</h3>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newColor}
                                        onChange={(e) => setNewColor(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && addColor()}
                                        placeholder="Escribe un color..."
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <button onClick={addColor} className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {isAdmin && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Colores Disponibles ({colors.length})</h3>
                                <div className="max-h-48 overflow-y-auto">
                                    {colors.length > 0 ? (
                                        <div className="space-y-2">
                                            {colors.map((color, index) => (
                                                <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                                                    <div className="flex items-center gap-2 flex-1">
                                                        <span className="flex-1">{color}</span>
                                                        <input
                                                            type="color"
                                                            value={
                                                                customColors[color] ||
                                                                (COLOR_MAP[color] ?? '#3b82f6')
                                                            }
                                                            onChange={(e) => updateCustomColor(color, e.target.value)}
                                                            className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer"
                                                            title={`Cambiar color de ${color}`}
                                                        />
                                                    </div>
                                                    <button onClick={() => removeColor(color)} className="text-red-500 hover:text-red-700 ml-2">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : <p className="text-gray-500 text-center py-4">No hay colores disponibles</p>}
                                </div>
                            </div>
                        )}

                        {isPublicMode && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Colores en la Ruleta ({colors.length})</h3>
                                <div className="max-h-48 overflow-y-auto">
                                    {colors.length > 0 ? colors.map((color, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
                                            <div
                                                className="w-6 h-6 rounded-full border-2 border-gray-300"
                                                style={{
                                                    backgroundColor:
                                                        customColors[color] ||
                                                        (COLOR_MAP[color] ?? '#3b82f6')
                                                }}
                                            />
                                            <span>{color}</span>
                                        </div>
                                    )) : <p className="text-gray-500 text-center py-4">No hay colores disponibles</p>}
                                </div>
                            </div>
                        )}

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Historial ({history.length})</h3>
                            <div className="max-h-80 md:max-h-[28rem] overflow-y-auto pr-2">
                                {history.length > 0 ? history.slice().reverse().map((entry, i) => (
                                    <div key={i} className="bg-blue-50 px-3 py-2 rounded text-sm">
                                        <span className="font-medium">{entry.color}</span>
                                        <span className="text-gray-500 ml-2">{new Date(entry.ts).toLocaleTimeString()}</span>
                                        {entry.by && <span className="text-gray-600 ml-2">por <strong>{entry.by}</strong></span>}
                                    </div>
                                )) : <p className="text-gray-500 text-center py-4">Aún no hay selecciones</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                        {isAdmin ? "🔧 Instrucciones para Administrador:" : "🎮 Instrucciones para Invitado:"}
                    </h4>
                    {isAdmin ? (
                        <ol className="text-sm text-blue-700 space-y-1">
                            <li>1. Abre con <code>?room=tuSala</code> (ej. fiesta1).</li>
                            <li>2. Agrega/edita colores y comparte el link público.</li>
                            <li>3. Todos verán la misma ruleta en tiempo real.</li>
                        </ol>
                    ) : (
                        <ol className="text-sm text-blue-700 space-y-1">
                            <li>1. Escribe tu nombre y pulsa <strong>GIRAR</strong>.</li>
                            <li>2. El color elegido parpadea y luego desaparece para todos.</li>
                        </ol>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ColorWheel;
