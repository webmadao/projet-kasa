import React from 'react';
import '../Apartment/AppartmentPage.scss';
import '../../components/Collapse/Collapse.scss';
import MyCollapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import ApartmentMain from '../../components/ApartmentMain/ApartmentMain';
import { useLocation } from 'react-router-dom'

// Composant fonctionnel AppartmentPage
function AppartmentPage() {
  // Utilisation du hook useLocation pour obtenir l'objet de localisation
  const location = useLocation();
  
  // Récupération des données d'état de l'objet de localisation
  const state = location.state;

  // Vérification de l'existence des données d'état, sinon redirection vers '/error'
  if (!state) {
    return window.location.replace('/error'); 
  }

  return (
    <div className='apartment-page'>
      {/* Affichage de la galerie d'images */}
      <Gallery />

      {/* Affichage des informations principales de l'appartement */}
      <ApartmentMain />

      <div className='apartment-collapse' width="calc(100% - 20px)" >
        {/* Utilisation du composant MyCollapse pour afficher la description */}
        <MyCollapse className="description" title="Description" content={state.description} width="calc(100% - 20px)" />

        {/* Utilisation du composant MyCollapse pour afficher les équipements */}
        <MyCollapse className="equipements" title="Equipements" content={state.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>))} width="calc(100% - 20px)">
        </MyCollapse>
      </div>
    </div>
  );
}

export default AppartmentPage;
