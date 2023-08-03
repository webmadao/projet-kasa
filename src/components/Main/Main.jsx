import React from 'react';
import { LogementList } from '../../data/Logement';
import "../Main/Main.scss";
import Card from '../Card/Card';

function Main() {
  return (
    <div className='main'>
      <div className='main-gallery'>
        {LogementList.map((logement) => (
          <Card
            key={logement.id}
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
