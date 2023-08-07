import React from 'react';
import "../Card/Card.scss";
import { Link } from 'react-router-dom';

function Card(props) {
  const state = props.state; 

  return (
    <div className='card'>
        <Link to='/flats' state={state}>
          <div className='gallery-item'>
            <img src={props.imageUrl} alt={props.title} />
            <p>{props.title}</p>
          </div>
        </Link>   
    </div>
  );
}

export default Card;

