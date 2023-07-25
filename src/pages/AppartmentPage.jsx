import ApartDetails from '../components/ApartDetails/ApartDetails'
import ApartEquipements from '../components/ApartEquipements/ApartEquipements'
import '../pages/AppartmentPage.scss'
import React from 'react'
import { useLocation } from 'react-router-dom'

function AppartmentPage() {
  const location = useLocation();
  console.log(location);
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
        <div className='apartment-details'>
        <ApartDetails />
        <ApartEquipements />
        </div>
      </div>
    )
  }
  
export default AppartmentPage