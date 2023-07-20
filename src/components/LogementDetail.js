
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LogementList } from '../data/Logement'; // Supposons que vous avez un fichier logement.js contenant votre liste de logements

const LogementDetail = () => {
  const { id } = useParams();
  const logement = LogementList.find((logement) => logement.id === id);

  // Gérer l'état de l'index de l'image actuellement affichée dans le carrousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gérer le changement de l'image actuellement affichée
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='logement-detail'>
      <h2>{logement.title}</h2>
      <img src={logement.images[currentImageIndex]} alt={logement.title} />

      {logement.images.length > 1 && (
        <div className='carousel-nav'>
          <button onClick={handlePreviousImage}>Image précédente</button>
          <span>{currentImageIndex + 1} / {logement.images.length}</span>
          <button onClick={handleNextImage}>Image suivante</button>
        </div>
      )}

      <p>Description : {logement.description}</p>
      <p>Prix : {logement.price} €</p>
      {/* Autres informations sur le logement */}
      {/* ... */}
      <Link to='/'>Retour à la liste</Link>
    </div>
  );
};

export default LogementDetail;
