import React from 'react';
import ApartDetails from '../../components/ApartDetails/ApartDetails';
import ApartEquipements from '../../components/ApartEquipements/ApartEquipements';
import '../../components/ApartEquipements/ApartEquipements.scss';

import '../Apartment/AppartmentPage.scss';
import '../../components/Collapse/Collapse.scss';
import MyCollapse from '../../components/Collapse/Collapse';
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
      <div className='apartment-collapse' width="calc(100% - 20px)" >
        
          <MyCollapse title="Description" content={state.description} width="100%" />
        
        
          <MyCollapse title="Equipements" content={state.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>))} width="100%">
 { /* {state.equipments.map((equipment, index) => (
    <p key={index}>{equipment}</p>*/} 
      
    
   {/*  {state.equipments.map((equipment, index) => (
      <div key={index}>{equipment}</div>
  ))}*/}
</MyCollapse>

        
      </div>
    </div>
    
  );
}

export default AppartmentPage;
