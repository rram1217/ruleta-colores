// src/ui/components/AdminControls.jsx
import React from 'react';
import { Share2, RefreshCw } from 'lucide-react';

export default function AdminControls({ onSharePublic, onShareAdmin, onReset }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button onClick={onSharePublic} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <Share2 size={16} /> Compartir Link Público
            </button>
            <button onClick={onShareAdmin} className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                <Share2 size={16} /> Compartir Link Admin
            </button>
            <button onClick={onReset} className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                <RefreshCw size={16} /> Reiniciar Juego
            </button>
        </div>
    );
}
