import React from 'react'

function AppartmentPage() {
  return (
    <div className='apartement-page'>
        <div>
       <img src='https://picsum.photos/800/400' alt='Appartment'/> 
        </div>
        <div className='apartment-info'>
            <h1>Crazy loft on Canal Saint Martin</h1>
            <h2>Paris, Ile de France</h2>
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
        </div>
        <div className='apartment-rating'>
            <h3>Alexandre Dumas</h3>
            <div className='apartement-rating-badge'></div>
            <div className='apartement-rating-stars'>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
        </div>
        <div className='apartment__description'>
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='apartment__equipement'>
            <p>Equipement</p>
            <ul>
                <li>Climatisation</li>
                <li>Wi-Fi</li>
                <li>Cuisine</li>
                <li>Espace de Travail</li>
                <li>Fer à repasser</li>
                <li>Séche cheveux </li>
                <li>Cintre</li>
            </ul>
        </div>
    </div>
  )
}

export default AppartmentPage