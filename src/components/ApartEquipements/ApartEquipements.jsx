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
        <span><i className={`fa-solid ${isVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
      </h4>
      {isVisible && (
        <ul>
          {state.tags.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApartEquipements;
