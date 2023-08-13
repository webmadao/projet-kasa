import React from 'react';
import ApartDetails from '../../components/ApartDetails/ApartDetails';
import ApartEquipements from '../../components/ApartEquipements/ApartEquipements';
import '../Apartment/AppartmentPage.scss';
import Gallery from '../../components/Gallery/Gallery';
import ApartmentMain from '../../components/ApartmentMain/ApartmentMain';
import { useLocation } from 'react-router-dom'

function AppartmentPage(props) {
  const location = useLocation()
  const state = location.state
  console.log("location", location);
  if ( !state) {
    return window.location.replace('/error'); 
  }
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
