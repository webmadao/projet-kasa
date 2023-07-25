import React, { useState } from 'react';
import '../ApartDetails/ApartDetails.scss';

function ApartDetails() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='apartment__description'>
      <h4 onClick={toggleVisibility}>
        <span>Description</span>
        <i className={`fa-solid ${isVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </h4>
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}
    </div>
  );
}

export default ApartDetails;
