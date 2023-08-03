import React from 'react'
import"../ApartmentMain/ApartmentMain.scss";
import { useLocation } from 'react-router-dom'
function ApartmainMain(props) {
  const location = useLocation()
  const state = location.state
  const name = state.host.name
  const [firstName, ...lastName] = name;

  return (
    <div className='apartment-main'>
        <div className='apartment-info'>
        <h1>{state.title}</h1> 
          <h2>'{state.location}'</h2>
          <div className='apart-tags'>
            {state.tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
        </div>
        <div className='apartment-rating'>
          <div className='rating-style'>
            <h3>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h3>
            <div className='apartment-rating-badge'>
              <img src={state.host.picture} alt="" />
            </div>
          </div>
          <div className='apartment-rating-stars'>
            {[1,2,3,4,5].map((num) => (
              <span key={num} className={state.rating >= num  ? "on" : ""}>★</span>
            ))}           
          </div>
        </div>
      </div>
  )
}

export default ApartmainMain