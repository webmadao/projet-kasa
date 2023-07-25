import React, { useState } from 'react';
import '../ApartEquipements/ApartEquipements.scss';

function ApartEquipements() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='apartment__equipement'>
      <h4 onClick={toggleVisibility}>
        <span>Equipements</span>
        <span><i className={`fa-solid ${isVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
      </h4>
      {isVisible && (
        <ul>
          <li>Climatisation</li>
          <li>Wi-Fi</li>
          <li>Cuisine</li>
          <li>Espace de Travail</li>
          <li>Fer à repasser</li>
          <li>Sèche cheveux</li>
          <li>Cintre</li>
        </ul>
      )}
    </div>
  );
}

export default ApartEquipements;
