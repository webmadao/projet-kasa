import React, { useState } from 'react';
import '../ApartDetails/ApartDetails.scss';
import { useLocation } from 'react-router-dom'

function ApartDetails(props) {
  const location = useLocation()
  const state = location.state
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={`apartment__description ${isVisible ? 'visible' : 'hidden'}`}>
      <h4 onClick={toggleVisibility}>
        <span>Description</span>
        <i className={`fa-solid ${isVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </h4>
      {isVisible && (
        <p>
          {state.description}
        </p>
      )}
    </div>
  );
}

export default ApartDetails;
