import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MapComponent from './components/MapComponent';
import GlobeComponent from './components/GlobeComponent';
function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            {/* <MapComponent /> */}
            <GlobeComponent />
            
        </div>
    );
}

export default App;
