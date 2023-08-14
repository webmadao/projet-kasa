import React, { useState } from 'react';
import '../ApartDetails/ApartDetails.scss';
import Collapse from '../Collapse/Collapse';
import { useLocation } from 'react-router-dom'

function ApartDetails(props) {
  const location = useLocation()
  const state = location.state
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
    <Collapse 
          title="Description"
          content={state.description}
        />
    </>
  );
}

export default ApartDetails;
