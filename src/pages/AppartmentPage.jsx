import React from 'react';
import ApartDetails from '../components/ApartDetails/ApartDetails';
import ApartEquipements from '../components/ApartEquipements/ApartEquipements';
import '../pages/AppartmentPage.scss';
import Gallery from '../components/Gallery/Gallery';
import ApartmentMain from '../components/ApartmentMain/ApartmentMain';
import { useLocation } from 'react-router-dom'

function AppartmentPage(props) {
  const location = useLocation()
  const state = location.state
  console.log("location", location);
  return (
    <div className='apartment-page'>
      <Gallery />
      <ApartmentMain />
      <div className='apartment-details'>
        <ApartDetails />
        <ApartEquipements />
      </div>
    </div>
  );
}

export default AppartmentPage;
