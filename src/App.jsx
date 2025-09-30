import React from 'react';
import ColorWheel from './ColorWheel';
import Home from './Home';

const App = () => {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get('room');

    // Si hay room en la URL, mostramos la ruleta; si no, el lobby
    return roomId ? <ColorWheel /> : <Home />;
};

export default App;
