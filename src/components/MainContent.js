import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <h1 className="title">Get your Global Flight Optimized Route data </h1>
            <p className="description">
                Get your Global Flight Track
            </p>
            <p className="text">
                Make a better 
            </p>
            
            
            <div className="image-container">
                <img src="routes-map.png" alt="Flight Routes Map" className="routes-map" />
            </div>
        </main>
    );
};

export default MainContent;
