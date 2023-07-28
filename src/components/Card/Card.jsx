import '../Card/Card.scss'
import React from 'react';
import { LogementList } from '../../data/Logement';
import { Link } from 'react-router-dom';

function Card(props) {
  console.log("props",props);
  return (
    <div className='card'>
      <div className='gallery-container'>
        <Link to='/flats/:id'>
        {LogementList.map((logement) => (
          <div key={logement.id} className='gallery-item'>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </div>
        ))}
        </Link>
      </div>
    </div>
  );
}

export default Card;

