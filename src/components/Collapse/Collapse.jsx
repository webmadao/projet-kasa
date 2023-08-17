import React, { useState } from 'react';
import '../Collapse/Collapse.scss';

function MyCollapse({ title, content, width, height }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse' style={{ width: width, height: height }}>
      <div className='about-fiabilité'>
        <h4>
          <span>{title}</span>
          <i
            className={`fa-solid fa-chevron ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            onClick={toggleCollapse}
          ></i>
        </h4>
        <p className={isOpen ? 'visible' : ''}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default MyCollapse;
