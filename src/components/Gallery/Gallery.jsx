import React, { useState } from 'react';
import "../Gallery/Gallery.scss";
import { useLocation } from 'react-router-dom';

// Composant fonctionnel Gallery
function Gallery() {
  // Utilisation du hook useLocation pour obtenir l'objet de localisation
  const location = useLocation();

  // Récupération des données d'état de l'objet de localisation
  const state = location.state;

  // État local pour gérer l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher l'image précédente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? state.pictures.length - 1 : prevIndex - 1));
  };

  // Fonction pour afficher l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === state.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  // Vérification des données d'état et affichage en conséquence
  if (!state || !state.pictures || state.pictures.length <= 1) {
    return (
      <div className='gallery'>
        <div>
          {/* Affichage de la première image ou d'une seule image */}
          <img src={state.pictures[0]} alt='Appartment' />
        </div>
      </div>
    );
  }

  return (
    <div className='gallery'>
      <div>
        {/* Affichage de l'image actuellement sélectionnée */}
        <img src={state.pictures[currentIndex]} alt='Appartment' />
      </div>
      <div className='gallery-chevron'>
        {/* Boutons pour naviguer entre les images précédente et suivante */}
        <button onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className='gallery-counter'>
        {/* Affichage du numéro de l'image actuelle et le total d'images */}
        {currentIndex + 1} / {state.pictures.length}
      </div>
    </div>
  );
}

export default Gallery;
