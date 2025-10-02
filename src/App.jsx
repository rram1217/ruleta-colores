import React from 'react';
import HomePage from '@/ui/pages/HomePage';
import RoomPage from '@/ui/pages/RoomPage';
//import ColorWheel from './ColorWheel';
//import Home from './Home';

//const App = () => {
//    const params = new URLSearchParams(window.location.search);
//    const roomId = params.get('room');

//    // Si hay room en la URL, mostramos la ruleta; si no, el lobby
//    return roomId ? <ColorWheel /> : <Home />;
//};

//export default App;

export default function App() {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get('room');
    // Si hay room en la URL, mostramos la ruleta; si no, el lobby
    return roomId ? <RoomPage /> : <HomePage />;
}