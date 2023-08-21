import React from 'react';
import '../Banner/Banner.scss'
function Banner({image}) {
    return (
    <div className='banner' >
    <img src={image} alt="Banner" className="banner-image" />
    </div>
    );
    }

export default Banner