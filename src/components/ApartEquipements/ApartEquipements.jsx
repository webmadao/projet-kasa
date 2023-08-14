import React, { useState } from 'react';
import '../ApartEquipements/ApartEquipements.scss';
import Collapse from '../Collapse/Collapse';
import { useLocation } from 'react-router-dom';

function ApartEquipements(props) {
  const location = useLocation();
  const state = location.state;
  //const [isVisible, setIsVisible] = useState(false);

 /* const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };*/

  return (
    <div>
      <Collapse className="equipements-collapse"
        title="Equipements"
        content={state.equipments.map((equipment, index) => (
          <div key={index}>{equipment}</div>
          ))}
      />
    </div>
  );
}

export default ApartEquipements;
