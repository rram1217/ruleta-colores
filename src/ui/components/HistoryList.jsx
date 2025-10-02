// src/ui/components/HistoryList.jsx
import React from 'react';

export default function HistoryList({ history }) {
    return (
        <div className="max-h-80 md:max-h-[28rem] overflow-y-auto pr-2">
            {history?.length > 0 ? history.slice().reverse().map((entry, i) => (
                <div key={i} className="bg-blue-50 px-3 py-2 rounded text-sm">
                    <span className="font-medium">{entry.color}</span>
                    <span className="text-gray-500 ml-2">{new Date(entry.ts).toLocaleTimeString()}</span>
                    {entry.by && <span className="text-gray-600 ml-2">por <strong>{entry.by}</strong></span>}
                </div>
            )) : <p className="text-gray-500 text-center py-4">Aún no hay selecciones</p>}
        </div>
    );
}
