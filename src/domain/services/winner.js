// src/domain/services/winner.js
export const normalize = (deg) => ((deg % 360) + 360) % 360;

/**
 * Calcula el índice ganador alineado al puntero en 0° (arriba).
 * Usamos redondeo al centro (Math.round) con offset -seg/2 aplicado en el dibujo.
 */
export function winnerIndex(finalRotationDeg, pointerZeroDeg, count) {
    if (count <= 0) return -1;
    const seg = 360 / count;
    const norm = normalize(finalRotationDeg);
    const angleAtPointer = normalize(pointerZeroDeg - norm);
    return Math.round(angleAtPointer / seg) % count;
}
