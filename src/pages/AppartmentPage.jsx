import '../pages/AppartmentPage.css'
import React from 'react'

function AppartmentPage() {
    return (
      <div className='apartment-page'>
        <div>
       <img src='https://picsum.photos/800/400' alt='Appartment'/> 
        </div>
        <div className='apartment-main'>
            <div className='apartment-info'>
                <h1>Crazy loft on Canal Saint Martin</h1>
                <h2>Paris, Ile de France</h2>
                <div className='apart-tags'>
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
             </div>
         </div>
            <div className='apartment-rating'>
                <div className='rating-style'>
                <h3>
                <span>Alexandre</span>
                <span>Dumas</span>
                </h3>
                <div className='apartment-rating-badge'></div>
                </div>
                <div className='apartment-rating-stars'>
                    <span className='on'>★</span>
                    <span className='on'>★</span>
                    <span className='on'>★</span>
                    <span className='off'>★</span>
                    <span className='off'>★</span>
                </div>
            </div>
        </div>
        <div  className='apartment-details'>
          <div className='apartment__description'>
            <h4>
              <span>Description</span>
              <i class="fa-solid fa-chevron-down"></i>
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='apartment__equipement'>
            <h4>
              <span> Equipements</span>
              <span><i class="fa-solid fa-chevron-down"></i></span>
            </h4>
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
      </div>
    )
  }
  
export default AppartmentPage