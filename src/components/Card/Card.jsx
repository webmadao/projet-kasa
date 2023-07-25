import '../Card/Card.scss'
import React from 'react';
import { LogementList } from '../../data/Logement';
import { Link, useParams } from 'react-router-dom';

function Card(logement) {
  const state = {
    apartmentId: logement.id
  };
  return (
    <div className='card'>
      <div className='gallery-container'>
        <Link to='/flats' state = {state}>
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
