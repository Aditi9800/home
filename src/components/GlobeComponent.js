// GlobeComponent.jsx
import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate the globe
    const globe = globeEl.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Globe
        ref={globeEl}
        width={300}
        height={300}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0.0050)"
      />
    </div>
  );
};

export default GlobeComponent;
