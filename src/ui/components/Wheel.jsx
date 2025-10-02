// src/ui/components/Wheel.jsx
import React from 'react';
import { COLOR_MAP } from '@/constants/colorMap';

//const POINTER_ZERO_DEG = 0;

export default function Wheel({ colors, customColors, rotation, flash }) {
    const size = 300;
    const r = 140;
    const cx = size / 2;
    const cy = size / 2;

    const isBlinking = (color) => flash && flash.color === color;

    // Un color = círculo lleno
    if (colors.length === 1) {
        const color = colors[0];
        const fill = customColors[color] || COLOR_MAP[color] || 'hsl(0,70%,50%)';
        return (
            <svg width={size} height={size} className="drop-shadow-lg">
                <g style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: `${cx}px ${cy}px`
                }}>
                    <circle cx={cx} cy={cy} r={r} className={isBlinking(color) ? 'blink-twice' : ''} fill={fill} stroke="#fff" strokeWidth="3" />
                    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
                        fill="white" fontSize="18" fontWeight="bold"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{color}</text>
                </g>
            </svg>
        );
    }

    const seg = 360 / Math.max(colors.length, 1);
    const drawOffset = -seg / 2;

    const segments = colors.map((color, index) => {
        const start = index * seg + drawOffset;
        const end = (index + 1) * seg + drawOffset;
        const largeArc = seg > 180 ? 1 : 0;

        const x1 = cx + r * Math.cos((start - 90) * Math.PI / 180);
        const y1 = cy + r * Math.sin((start - 90) * Math.PI / 180);
        const x2 = cx + r * Math.cos((end - 90) * Math.PI / 180);
        const y2 = cy + r * Math.sin((end - 90) * Math.PI / 180);

        const d = [`M ${cx} ${cy}`, `L ${x1} ${y1}`, `A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`, 'Z'].join(' ');
        const labelAngle = start + seg / 2;
        const fill = customColors[color] || COLOR_MAP[color] || `hsl(${index * 360 / Math.max(colors.length, 1)},70%,50%)`;

        return (
            <g key={color}>
                <path d={d} className={isBlinking(color) ? 'blink-twice' : ''} fill={fill} stroke="#fff" strokeWidth="3" />
                <text
                    x={cx + 80 * Math.cos((labelAngle - 90) * Math.PI / 180)}
                    y={cy + 80 * Math.sin((labelAngle - 90) * Math.PI / 180)}
                    textAnchor="middle" dominantBaseline="middle"
                    fill="white" fontSize="11" fontWeight="bold"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >{color}</text>
            </g>
        );
    });

    return (
        <svg width={size} height={size} className="drop-shadow-lg">
            <g style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: `${cx}px ${cy}px`
            }}>
                {segments}
            </g>

            {/* Puntero fijo arriba */}
            <g transform={`translate(${cx}, ${12})`}>
                <polygon points="0,0 -12,20 12,20" fill="#dc2626" />
                <circle cx="0" cy="22" r="6" fill="#dc2626" stroke="#fff" strokeWidth="2" />
            </g>
        </svg>
    );
}

//export const POINTER_ZERO_DEG = 0; // por si lo necesitas desde fuera
