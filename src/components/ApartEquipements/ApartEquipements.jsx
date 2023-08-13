import React, { useState } from 'react';
import '../ApartEquipements/ApartEquipements.scss';
import { useLocation } from 'react-router-dom';

function ApartEquipements(props) {
  const location = useLocation();
  const state = location.state;
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='apartment__equipement'>
      <h4 onClick={toggleVisibility}>
        <span>Equipements</span>
        <span><i className={`fa ${isVisible ? 'fa-chevron-up rotate' : 'fa-chevron-down'}`}></i></span>
      </h4>
      
        <ul className={isVisible ? 'visible' : ''}>
          {state.tags.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
     
    </div>
  );
}

export default ApartEquipements;
