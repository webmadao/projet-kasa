import React from 'react';
import '../Banner/Banner.scss';

// Composant fonctionnel Banner prenant une prop "image"
function Banner({ image }) {
  return (
    <div className='banner'>
      {/* Affichage de l'image en utilisant la prop "image" */}
      <img src={image} alt="Banner" className="banner-image" />
    </div>
  );
}

export default Banner;
