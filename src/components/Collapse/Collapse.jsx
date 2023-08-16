import React, { useState } from 'react';
import '../Collapse/Collapse.scss';
import NavBar from '../../layout/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import ApartDetails from '../../components/ApartDetails/ApartDetails';

function MyCollapse({ title, content, width, }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>  
      <div className='collapse' style={{ width: width }}>
        <div className='about-fiabilité'>
          <h4>
            <span>{title}</span>
            <i
              className={`fa-solid fa-chevron ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              onClick={toggleCollapse}
            ></i>
          </h4>
          <p className={isOpen ? 'visible' : ''}>
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default MyCollapse;



