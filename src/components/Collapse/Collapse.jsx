import React, { useState } from 'react';
import '../Collapse/Collapse.scss';

// Composant fonctionnel MyCollapse prenant des props
function MyCollapse({ title, content, width, height, paddingBottom }) {
  // État local pour gérer l'état d'ouverture/fermeture du contenu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture/fermeture
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse' style={{ width: width, height: height, paddingBottom: paddingBottom }}>
      <div className='about-fiabilité'>
        {/* Affichage du titre avec une icône cliquable */}
        <h4>
          <span>{title}</span>
          <i
            className={`fas fa-angle-up ${isOpen ? 'closed' : 'open'}`}
            onClick={toggleCollapse}
          ></i>
        </h4>
        {/* Affichage du contenu en fonction de l'état d'ouverture */}
        <p className={isOpen ? 'visible' : ''}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default MyCollapse;
