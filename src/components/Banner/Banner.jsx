import React from 'react';
import '../Banner/Banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <img src={process.env.PUBLIC_URL + '/images/mer.png'} alt="banner" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
