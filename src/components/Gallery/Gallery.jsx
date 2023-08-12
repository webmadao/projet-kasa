import React, { useState } from 'react';
import "../Gallery/Gallery.scss";
import { useLocation } from 'react-router-dom';
import ErrorPage from '../../pages/Error/ErrorPage';

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

  if (!state || !state.pictures || state.pictures.length <= 1) {
    return (
      <div className='gallery'>
        <div>
          <img src={state.pictures[0]} alt='Appartment' />
        </div>
      </div>
    );
  }

  return (
    <div className='gallery'>
      <div>
        <img src={state.pictures[currentIndex]} alt='Appartment' />
      </div>
      <div className='gallery-chevron'>
        <button onClick={handlePrev}><i class="fa-solid fa-chevron-left"></i></button>
        <button onClick={handleNext}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className='gallery-counter'>
        {currentIndex + 1} / {state.pictures.length}
      </div>
    </div>
  );
}

export default Gallery;

