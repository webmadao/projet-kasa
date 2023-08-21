import React from 'react';
import '../Apartment/AppartmentPage.scss';
import '../../components/Collapse/Collapse.scss';
import MyCollapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import ApartmentMain from '../../components/ApartmentMain/ApartmentMain';
import { useLocation } from 'react-router-dom'

function AppartmentPage() {
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
        
          <MyCollapse className="description" title="Description" content={state.description} width="calc(100% - 20px)" />

        
          <MyCollapse className="equipements" title="Equipements" content={state.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>))} width="calc(100% - 20px)">
        </MyCollapse>
      
      </div>
    </div>
    
  );
}

export default AppartmentPage;
