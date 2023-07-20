import '../styles/Main.css'
import React from 'react';
import { LogementList } from '../data/Logement';
import { Link } from 'react-router-dom';



const Main = () => {
    const firstSixLogements = LogementList.slice(0, 6);
  return (
    <div className='kasa-main'>
        <div className='gallery-container'>
        {firstSixLogements.map((logement) => (
        <div key={logement.id} className='gallery-item'>
            <img src={logement.cover} alt={logement.title} />
          <p>{logement.title}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Main;
