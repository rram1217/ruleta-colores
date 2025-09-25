import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Plus, RotateCw, Share2, RefreshCw } from 'lucide-react';

const ColorWheel = () => {
  const [colors, setColors] = useState(['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Morado']);
  const [newColor, setNewColor] = useState('');
  const [customColors, setCustomColors] = useState({});
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [history, setHistory] = useState([]);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  // Determinar si es modo administrador o público
  const urlParams = new URLSearchParams(window.location.search);
  const isPublicMode = urlParams.get('mode') === 'public';
  const isAdmin = !isPublicMode;

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedColors = localStorage.getItem('wheelColors');
    const savedHistory = localStorage.getItem('wheelHistory');
    const savedCustomColors = localStorage.getItem('wheelCustomColors');
    
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    if (savedCustomColors) {
      setCustomColors(JSON.parse(savedCustomColors));
    }
  }, []);

  // Guardar en localStorage cuando cambien los colores, historial o colores personalizados
  useEffect(() => {
    localStorage.setItem('wheelColors', JSON.stringify(colors));
  }, [colors]);

  useEffect(() => {
    localStorage.setItem('wheelHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('wheelCustomColors', JSON.stringify(customColors));
  }, [customColors]);

  const addColor = () => {
    if (!isAdmin) return; // Solo administrador puede agregar
    if (newColor.trim() && !colors.includes(newColor.trim())) {
      setColors([...colors, newColor.trim()]);
      setNewColor('');
    }
  };

  const removeColor = (colorToRemove) => {
    if (!isAdmin) return; // Solo administrador puede remover
    setColors(colors.filter(color => color !== colorToRemove));
    // También remover el color personalizado si existe
    if (customColors[colorToRemove]) {
      const newCustomColors = { ...customColors };
      delete newCustomColors[colorToRemove];
      setCustomColors(newCustomColors);
    }
  };

  const updateCustomColor = (colorName, hexColor) => {
    if (!isAdmin) return; // Solo administrador puede cambiar colores
    setCustomColors(prev => ({
      ...prev,
      [colorName]: hexColor
    }));
  };

  const spinWheel = () => {
    if (colors.length === 0 || isSpinning) return;
    
    setIsSpinning(true);
    setSelectedColor('');
    
    // Generar rotación aleatoria
    const spins = 5 + Math.random() * 5; // Entre 5 y 10 vueltas
    const finalRotation = rotation + (spins * 360) + Math.random() * 360;
    setRotation(finalRotation);
    
    setTimeout(() => {
      // Calcular qué color fue seleccionado - CORREGIDO
      const segmentAngle = 360 / colors.length;
      // El puntero está en la parte superior (0°), calculamos desde ahí
      const normalizedRotation = finalRotation % 360;
      // Ajustamos para que el primer segmento esté centrado en el puntero
      const adjustedRotation = (normalizedRotation + segmentAngle / 2) % 360;
      const selectedIndex = Math.floor(adjustedRotation / segmentAngle);
      const selected = colors[selectedIndex];
      
      setSelectedColor(selected);
      setIsSpinning(false);
      
      // Agregar al historial inmediatamente
      const newHistory = [...history, { color: selected, timestamp: new Date().toLocaleTimeString() }];
      setHistory(newHistory);
      
      // Si es el último color, no eliminarlo para mantenerlo visible
      if (colors.length === 1) {
        // No eliminar el último color, mantenerlo visible
        return;
      }
      
      // Para colores restantes, esperar más tiempo antes de eliminar (5 segundos adicionales)
      setTimeout(() => {
        setColors(prevColors => prevColors.filter(color => color !== selected));
      }, 5000);
      
    }, 3000);
  };

  const resetGame = () => {
    if (!isAdmin) return; // Solo administrador puede reiniciar
    const allColors = [...colors, ...history.map(h => h.color)];
    setColors(allColors);
    setHistory([]);
    setSelectedColor('');
    setRotation(0);
  };

  const sharePublicLink = () => {
    const baseUrl = window.location.href.split('?')[0];
    const publicUrl = `${baseUrl}?mode=public`;
    navigator.clipboard.writeText(publicUrl).then(() => {
      alert('¡Link público copiado! Los invitados solo podrán girar la ruleta.');
    }).catch(() => {
      alert(`Link público para compartir: ${publicUrl}`);
    });
  };

  const shareAdminLink = () => {
    const url = window.location.href.split('?')[0];
    navigator.clipboard.writeText(url).then(() => {
      alert('¡Link de administrador copiado! Con acceso completo a configuraciones.');
    }).catch(() => {
      alert(`Link de administrador: ${url}`);
    });
  };

  const getWheelSegments = () => {
    const segmentAngle = 360 / colors.length;
    return colors.map((color, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
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

      // Mapa expandido de colores más precisos
      const colorMap = {
        // Colores básicos
        'Rojo': '#dc2626', 'Azul': '#2563eb', 'Verde': '#16a34a', 
        'Amarillo': '#eab308', 'Naranja': '#ea580c', 'Morado': '#9333ea',
        'Rosa': '#ec4899', 'Violeta': '#7c3aed', 'Cyan': '#0891b2', 
        'Negro': '#1f2937', 'Blanco': '#f9fafb', 'Gris': '#6b7280',
        
        // Colores específicos
        'Celeste': '#0ea5e9', 'Turquesa': '#14b8a6', 'Lima': '#84cc16',
        'Dorado': '#f59e0b', 'Plateado': '#9ca3af', 'Marrón': '#92400e',
        'Café': '#78350f', 'Beige': '#d6d3d1', 'Coral': '#f97316',
        'Magenta': '#d946ef', 'Índigo': '#4f46e5', 'Lavanda': '#a78bfa',
        
        // Tonos específicos
        'Rojo Oscuro': '#991b1b', 'Azul Claro': '#60a5fa', 'Verde Claro': '#4ade80',
        'Amarillo Claro': '#fde047', 'Rosa Claro': '#f9a8d4', 'Morado Claro': '#c084fc',
        'Verde Oscuro': '#15803d', 'Azul Oscuro': '#1e40af', 'Naranja Claro': '#fb923c',
        
        // Colores adicionales
        'Esmeralda': '#10b981', 'Rubí': '#be123c', 'Zafiro': '#1e40af',
        'Ámbar': '#f59e0b', 'Jade': '#059669', 'Carmesí': '#dc2626'
      };
      
      // Usar color personalizado o del mapa, o generar automáticamente
      const segmentColor = customColors[color] || 
                          colorMap[color] || 
                          `hsl(${index * 360 / colors.length}, 70%, 50%)`;
      
      return (
        <g key={color}>
          <path
            d={pathData}
            fill={segmentColor}
            stroke="#fff"
            strokeWidth="3"
          />
          <text
            x={150 + 80 * Math.cos((startAngle + segmentAngle / 2 - 90) * Math.PI / 180)}
            y={150 + 80 * Math.sin((startAngle + segmentAngle / 2 - 90) * Math.PI / 180)}
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🎯 Ruleta de Colores
            {isPublicMode && <span className="text-lg text-blue-600 font-normal"> - Modo Invitado</span>}
            {isAdmin && <span className="text-lg text-green-600 font-normal"> - Modo Administrador</span>}
          </h1>
          <p className="text-gray-600">
            {isPublicMode 
              ? "¡Gira la ruleta y diviértete! Solo puedes girar, no modificar colores."
              : "Agrega colores, gira la ruleta y comparte con tus amigos"
            }
          </p>
        </div>

        {/* Controles superiores - Solo para administrador */}
        {isAdmin && (
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={sharePublicLink}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Share2 size={16} />
              Compartir Link Público
            </button>
            <button
              onClick={shareAdminLink}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Share2 size={16} />
              Compartir Link Admin
            </button>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RefreshCw size={16} />
              Reiniciar Juego
            </button>
          </div>
        )}

        {/* Mensaje informativo para invitados */}
        {isPublicMode && (
          <div className="mb-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center">
            <p className="text-blue-800">
              <strong>👋 ¡Bienvenido invitado!</strong><br />
              Puedes girar la ruleta cuantas veces quieras. Los colores se eliminan automáticamente después de ser seleccionados.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Panel izquierdo - Ruleta */}
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
                  
                  {/* Puntero/Flecha indicadora mejorada */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      {/* Sombra de la flecha */}
                      <div className="absolute top-1 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-black opacity-30"></div>
                      {/* Flecha principal */}
                      <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-600 relative z-10"></div>
                      {/* Círculo central del puntero */}
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
              disabled={colors.length === 0 || isSpinning}
              className={`w-32 h-32 rounded-full text-white font-bold text-lg shadow-lg transform transition-all ${
                colors.length === 0 || isSpinning
                  ? 'bg-gray-400 cursor-not-allowed'
                  : colors.length === 1
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 hover:scale-105 active:scale-95'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95'
              }`}
            >
              {isSpinning ? (
                <RotateCw className="animate-spin mx-auto" size={24} />
              ) : colors.length === 1 ? (
                <div className="text-center">
                  <div>🏆</div>
                  <div className="text-xs">FINAL</div>
                </div>
              ) : (
                'GIRAR'
              )}
            </button>

            {selectedColor && (
              <div className={`mt-4 p-4 border rounded-lg ${
                colors.length === 1 
                  ? 'bg-gold-100 border-yellow-300 bg-gradient-to-r from-yellow-100 to-orange-100' 
                  : 'bg-green-100 border-green-300'
              }`}>
                <h3 className={`text-lg font-bold ${
                  colors.length === 1 
                    ? 'text-yellow-800' 
                    : 'text-green-800'
                }`}>
                  {colors.length === 1 ? '🏆 ¡COLOR GANADOR FINAL!' : '¡Resultado!'}
                </h3>
                <p className={`text-2xl font-bold ${
                  colors.length === 1 
                    ? 'text-yellow-900' 
                    : 'text-green-900'
                }`}>
                  {selectedColor}
                </p>
                {colors.length === 1 && (
                  <p className="text-sm text-yellow-700 mt-2">
                    Este es el último color - ¡Ha ganado la ruleta! 🎉
                  </p>
                )}
              </div>
            )}

            <div className="mt-4 text-sm">
              {colors.length === 1 ? (
                <div className="text-yellow-600 font-semibold">
                  🏆 ¡Último color restante!
                </div>
              ) : colors.length === 0 ? (
                <div className="text-gray-500">
                  No quedan colores - {isAdmin ? 'Reinicia el juego' : 'Espera que reinicien'}
                </div>
              ) : (
                <div className="text-gray-600">
                  Colores restantes: {colors.length}
                </div>
              )}
            </div>
          </div>

          {/* Panel derecho - Controles */}
          <div>
            {/* Agregar color - Solo administrador */}
            {isAdmin && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Agregar Color</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addColor()}
                    placeholder="Escribe un color..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={addColor}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Lista de colores disponibles - Solo administrador */}
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
                              value={customColors[color] || '#3b82f6'}
                              onChange={(e) => updateCustomColor(color, e.target.value)}
                              className="w-8 h-8 rounded border-2 border-gray-300 cursor-pointer"
                              title={`Cambiar color de ${color}`}
                            />
                          </div>
                          <button
                            onClick={() => removeColor(color)}
                            className="text-red-500 hover:text-red-700 transition-colors ml-2"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">No hay colores disponibles</p>
                  )}
                </div>
              </div>
            )}

            {/* Lista solo de lectura para invitados */}
            {isPublicMode && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Colores en la Ruleta ({colors.length})</h3>
                <div className="max-h-48 overflow-y-auto">
                  {colors.length > 0 ? (
                    <div className="space-y-1">
                      {colors.map((color, index) => (
                        <div key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-gray-300"
                            style={{ backgroundColor: customColors[color] || '#3b82f6' }}
                          ></div>
                          <span>{color}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">No hay colores disponibles</p>
                  )}
                </div>
              </div>
            )}

            {/* Historial - Para todos */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Historial ({history.length})</h3>
              <div className="max-h-48 overflow-y-auto">
                {history.length > 0 ? (
                  <div className="space-y-1">
                    {history.slice().reverse().map((entry, index) => (
                      <div key={index} className="bg-blue-50 px-3 py-2 rounded text-sm">
                        <span className="font-medium">{entry.color}</span>
                        <span className="text-gray-500 ml-2">{entry.timestamp}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">Aún no hay selecciones</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">
            {isAdmin ? "🔧 Instrucciones para Administrador:" : "🎮 Instrucciones para Invitado:"}
          </h4>
          {isAdmin ? (
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. Configura todos los colores que quieres incluir</li>
              <li>2. Personaliza los colores usando los selectores de color 🎨</li>
              <li>3. Haz clic en <strong>"Compartir Link Público"</strong> para enviar a tu grupo</li>
              <li>4. Los invitados solo podrán girar la ruleta, no modificar nada</li>
              <li>5. Usa <strong>"Compartir Link Admin"</strong> si quieres dar acceso completo a alguien</li>
            </ol>
          ) : (
            <ol className="text-sm text-blue-700 space-y-1">
              <li>1. Haz clic en el botón <strong>"GIRAR"</strong> para usar la ruleta</li>
              <li>2. Espera a que pare y ve el resultado</li>
              <li>3. El color seleccionado desaparecerá automáticamente</li>
              <li>4. ¡Continúa hasta que quede un solo color ganador! 🏆</li>
            </ol>
          )}
          <div className="mt-3 p-2 bg-blue-100 rounded">
            {isAdmin ? (
              <p className="text-xs text-blue-800">
                <strong>💡 Tip:</strong> El link público es seguro - los invitados no pueden modificar tu configuración.
              </p>
            ) : (
              <p className="text-xs text-blue-800">
                <strong>ℹ️ Nota:</strong> Solo puedes girar la ruleta. Para modificar colores necesitas el link de administrador.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorWheel;