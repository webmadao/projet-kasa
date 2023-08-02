import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Gallery() {
  const location = useLocation();
  const state = location.state;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? state.pictures.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === state.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div>
        <img src={state.pictures[currentIndex]} alt='Appartment' />
      </div>
      <div>
        <button onClick={handlePrev}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </div>
      <div>
        {currentIndex + 1} / {state.pictures.length}
      </div>
    </div>
  );
}

export default Gallery;
