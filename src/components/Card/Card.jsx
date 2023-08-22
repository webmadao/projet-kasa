import React from 'react';
import "../Card/Card.scss";
import { Link } from 'react-router-dom';

// Composant fonctionnel Card prenant des props
function Card(props) {
  // Récupération de la prop "state" depuis les props
  const state = props.state; 

  return (
    <div className='card'>
      {/* Utilisation du composant Link pour créer un lien vers "/flats/{props.id}" */}
      {/* La prop "state" sera disponible dans le composant cible grâce à l'objet de localisation */}
      <Link to={`/flats/${props.id}`} state={state}>
        <div className='gallery-item'>
          {/* Affichage de l'image et du titre depuis les props */}
          <img src={props.imageUrl} alt={props.title} />
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
