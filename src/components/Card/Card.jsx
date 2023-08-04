import React from 'react';
import "../Card/Card.scss";
import { Link } from 'react-router-dom';

function Card(props) {
  const state = props.state; 

  return (
    <div className='card'>
      <div className='gallery-container'>
        <Link to='/flats' state={state}>
          <div className='gallery-item'>
            <img src={props.imageUrl} alt={props.title} />
            <p>{props.title}</p>
          </div>
        </Link> 
        </div> 
    </div>
  );
}

export default Card;

