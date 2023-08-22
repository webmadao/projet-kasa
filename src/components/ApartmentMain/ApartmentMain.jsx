import React from 'react';
import '../ApartmentMain/ApartmentMain.scss';
import { useLocation } from 'react-router-dom';

function ApartmainMain() {
  // Utilisation du hook useLocation pour obtenir l'objet de localisation
  const location = useLocation();

  // Extraction des données d'état de l'objet de localisation
  const state = location.state;

  // Séparation du nom complet de l'hôte en prénom et nom de famille
  const fullName = state.host.name;
  const [firstName, lastName] = fullName.split(' ');

  return (
    <div className='apartment-main'>
      <div className='apartment-info'>
        {/* Affichage du titre et de l'emplacement de l'appartement */}
        <h1>{state.title}</h1>
        <h2>'{state.location}'</h2>
        <div className='apart-tags'>
          {/* Affichage des balises de l'appartement */}
          {state.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className='apartment-rating'>
        <div className='rating-style'>
          {/* Affichage du prénom et du nom de l'hôte */}
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className='apartment-rating-badge'>
            {/* Affichage de la photo de profil de l'hôte */}
            <img src={state.host.picture} alt='' />
          </div>
        </div>
        <div className='apartment-rating-stars'>
          {/* Affichage des étoiles de notation en fonction de l'état de notation */}
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={state.rating >= num ? 'on' : ''}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmainMain;
