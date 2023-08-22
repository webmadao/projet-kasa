import React from 'react';
import { LogementList } from '../../data/Logement';
import "../Main/Main.scss";
import Card from '../Card/Card';

// Composant fonctionnel Main
function Main() {
  return (
    <div className='main'>
      <div className='main-gallery'>
        {/* Mapping à travers la liste de logements pour afficher des cartes */}
        {LogementList.map((logement) => (
          <Card
            key={logement.id} //Cruciale pour la performance et la gestion de la liste d'éléments.
            id={logement.id}
            title={logement.title}
            imageUrl={logement.cover}
            state={logement}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
