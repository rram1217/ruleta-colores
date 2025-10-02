// src/ui/pages/RoomPage.jsx
import React, { useEffect, /*useRef,*/ useState } from 'react';
import { Plus, RotateCw, Trash2 } from 'lucide-react';
import Wheel from '@/ui/components/Wheel';
import AdminControls from '@/ui/components/AdminControls';
import HistoryList from '@/ui/components/HistoryList';
import { COLOR_MAP } from '@/constants/colorMap';
import { winnerIndex } from '@/domain/services/winner';
import { roomRepository } from '@/infra/RoomRepositoryFirebase';

const POINTER_ZERO_DEG = 0; 

export default function RoomPage() {
    // URL params
    const params = new URLSearchParams(window.location.search);
    const isPublicMode = params.get('mode') === 'public';
    const isAdmin = !isPublicMode;
    const roomId = params.get('room') || 'default';

    const repo = roomRepository(roomId);

    // Estado
    const [colors, setColors] = useState(['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Blanco/Morado', 'Negro', 'Rosa']);
    const [customColors, setCustomColors] = useState({});
    const [history, setHistory] = useState([]);
    const [flash, setFlash] = useState(null);
    const [roomCode, setRoomCode] = useState('');
    const [newColor, setNewColor] = useState('');

    const [playerName, setPlayerName] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');

    // persistir nombre
    useEffect(() => {
        const saved = localStorage.getItem('wheelPlayerName') || '';
        setPlayerName(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem('wheelPlayerName', playerName || '');
    }, [playerName]);

    // suscripción
    useEffect(() => {
        repo.initIfNeeded(isAdmin, colors, customColors).catch(() => { });
        const unsub = repo.watch((room) => {
            if (!room) return;
            setColors(room.colors);
            setCustomColors(room.customColors);
            setHistory(room.history);
            setFlash(room.flash);
            setRoomCode(room.code || '');
        });
        repo.ensureRoomCode(isAdmin).catch(() => { });
        return () => unsub();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId, isAdmin]);

    // derived
    const playerOk = (playerName || '').trim().length > 0;
    const lastColorAlreadyChosen = colors.length === 1 && history?.some(h => h.color === colors[0]);
    const gameFinished = lastColorAlreadyChosen;
    const canSpin = colors.length > 0 && !isSpinning && playerOk && !gameFinished;

    // acciones admin
    const addColor = async () => {
        if (!isAdmin) return;
        const c = newColor.trim();
        if (!c) return;
        await repo.addColor(c);
        setNewColor('');
    };
    const removeColor = async (c) => { if (isAdmin) await repo.removeColor(c); };
    const updateCustomColor = async (name, hex) => { if (isAdmin) await repo.updateCustomColor(name, hex); };

    const resetGame = async () => {
        if (!isAdmin) return;
        await repo.reset();
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

    // giro
    const spinWheel = () => {
        const who = (playerName || '').trim();
        if (!who) { alert('Por favor, escribe tu nombre antes de girar.'); return; }
        if (colors.length === 0 || isSpinning) return;
        if (gameFinished) { alert('El juego ya terminó ??'); return; }

        setIsSpinning(true);
        setSelectedColor('');

        const spins = 5 + Math.random() * 5;
        const finalRotation = rotation + (spins * 360) + Math.random() * 360;
        setRotation(finalRotation);

        const BLINK_DURATION = 1200;
        const REMOVE_DELAY = BLINK_DURATION + 100;

        setTimeout(async () => {
            const n = colors.length;
            if (n === 0) { setIsSpinning(false); return; }

            // índice ganador puro (dominio)
            const idx = winnerIndex(finalRotation, POINTER_ZERO_DEG, n);
            const selected = colors[idx];

            // historia + flash
            //const ts = await repo.pushHistoryAndFlash(selected, who, BLINK_DURATION);
            setSelectedColor(selected);
            setIsSpinning(false);

            // remover luego del parpadeo (si no es el último)
            setTimeout(async () => {
                await repo.removeAfterFlashIfNotLast(selected);
            }, REMOVE_DELAY);
        }, 3000);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
            {/* estilos parpadeo */}
            <style>{`
        @keyframes blinkTwice {
          0%{opacity:1;transform:scale(1);}20%{opacity:.4;transform:scale(1.02);}
          40%{opacity:1;}60%{opacity:.4;transform:scale(1.02);}
          80%{opacity:1;}100%{opacity:1;}
        }
        .blink-twice { animation: blinkTwice 1.2s ease-in-out; }
      `}</style>

            <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Ruleta de Colores para Fiesta de Colores
                        {isPublicMode && <span className="text-lg text-blue-600 font-normal"> - Modo Invitado</span>}
                        {isAdmin && <span className="text-lg text-green-600 font-normal"> - Modo Administrador</span>}
                    </h1>
                    <p className="text-gray-600">
                        {isPublicMode ? "¡Gira la ruleta y diviértete! Solo puedes girar, no modificar colores."
                            : "Agrega colores, gira la ruleta y comparte con tus amigos"}
                    </p>
                    <p className="text-xs text-gray-500">Sala: <code>{roomId}</code></p>

                    {roomCode && (
                        <div className="mt-3 inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-800 px-3 py-1.5 rounded-lg">
                            <span className="text-sm">Código de sala:</span>
                            <code className="font-semibold tracking-widest">{roomCode}</code>
                            <button
                                onClick={async () => {
                                    try { await navigator.clipboard.writeText(roomCode); alert(`Código copiado: ${roomCode}`); }
                                    catch { alert(`Código: ${roomCode}`); }
                                }}
                                className="ml-2 text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded"
                            >Copiar</button>
                        </div>
                    )}
                </div>

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

                {isAdmin && (
                    <AdminControls
                        onSharePublic={sharePublicLink}
                        onShareAdmin={shareAdminLink}
                        onReset={resetGame}
                    />
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Ruleta */}
                    <div className="text-center">
                        <div className="relative inline-block mb-4">
                            {colors.length > 0 ? (
                                <Wheel colors={colors} customColors={customColors} rotation={isSpinning ? rotation : rotation} flash={flash} />
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
                            className={`w-32 h-32 rounded-full text-white font-bold text-lg shadow-lg transform transition-all ${!canSpin ? 'bg-gray-400 cursor-not-allowed'
                                    : colors.length === 1
                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 hover:scale-105 active:scale-95'
                                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95'
                                }`}
                            title={
                                !playerOk ? 'Escribe tu nombre para poder girar'
                                    : gameFinished ? 'Juego finalizado'
                                        : 'Girar la ruleta'
                            }
                        >
                            {isSpinning ? (
                                <RotateCw className="animate-spin mx-auto" size={24} />
                            ) : gameFinished ? (
                                <div className="text-center"><div>??</div><div className="text-xs">FINALIZADO</div></div>
                            ) : colors.length === 1 ? (
                                <div className="text-center"><div>??</div><div className="text-xs">FINAL</div></div>
                            ) : ('GIRAR')}
                        </button>

                        {gameFinished && (
                            <div className="mt-3 text-sm text-yellow-700 bg-yellow-100 border border-yellow-200 rounded p-2">
                                ?? Juego finalizado: ya se han extraído todos los colores.
                            </div>
                        )}

                        {selectedColor && (
                            <div className={`mt-4 p-4 border rounded-lg ${colors.length === 1 ? 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300' : 'bg-green-100 border-green-300'
                                }`}>
                                <h3 className={`text-lg font-bold ${colors.length === 1 ? 'text-yellow-800' : 'text-green-800'}`}>
                                    {colors.length === 1 ? '?? ¡COLOR FINAL!' : '¡Resultado!'}
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
                                                            value={customColors[color] || (COLOR_MAP[color] ?? '#3b82f6')}
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
                                            <div className="w-6 h-6 rounded-full border-2 border-gray-300"
                                                style={{ backgroundColor: customColors[color] || (COLOR_MAP[color] ?? '#3b82f6') }} />
                                            <span>{color}</span>
                                        </div>
                                    )) : <p className="text-gray-500 text-center py-4">No hay colores disponibles</p>}
                                </div>
                            </div>
                        )}

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Historial ({history.length})</h3>
                            <HistoryList history={history} />
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                        {isAdmin ? "?? Instrucciones para Administrador:" : "?? Instrucciones para Invitado:"}
                    </h4>
                    {isAdmin ? (
                        <ol className="text-sm text-blue-700 space-y-1">
                            <li>1. Abre con <code>?room=tuSala</code> (ej. fiesta1).</li>
                            <li>2. Agrega/edita colores y comparte el link público o el código.</li>
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
}
