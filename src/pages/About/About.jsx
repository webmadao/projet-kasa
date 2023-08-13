import React, { useState } from 'react';
import '../About/About.scss';
import NavBar from '../../layout/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import ApartDetails from '../../components/ApartDetails/ApartDetails';

function About() {
  // États locaux pour contrôler l'affichage des paragraphes
  const [fiabiliteOpen, setFiabiliteOpen] = useState(false);
  const [respectOpen, setRespectOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [securiteOpen, setSecuriteOpen] = useState(false);

  

  // Fonction pour inverser l'état d'ouverture/fermeture du paragraphe
  const toggleSection = (section) => {
    switch (section) {
      case 'fiabilite':
        setFiabiliteOpen(!fiabiliteOpen);
        break;
      case 'respect':
        setRespectOpen(!respectOpen);
        break;
      case 'service':
        setServiceOpen(!serviceOpen);
        break;
      case 'securite':
        setSecuriteOpen(!securiteOpen);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Banner image="./images/montagnes.png" />
      <div className='about__page'>
        <div className='about-fiabilité'>
          <h4>
            <span>Fiabilité</span>
            <i
              className={`fa-solid ${fiabiliteOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              onClick={() => toggleSection('fiabilite')}
            ></i>

          </h4>
          
          <p className={fiabiliteOpen ? 'visible' : ''}>
              Les annonces postées sur Kasa garantissent une fiabilité totale. les photos sont conformes aux logements,
              et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          
        </div>

        <div className='about-respect'>
          <h4>
            <span>Respect</span>
            <i
              className={`fa-solid ${respectOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              onClick={() => toggleSection('respect')}
            ></i>
          </h4>
          
            <p className={respectOpen ? 'visible' : ''}>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entrainera une exclusion de notre plateforme.
            </p>
          
        </div>

        <div className='about-service'>
          <h4>
            <span>Service</span>
            <i
              className={`fa-solid ${serviceOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              onClick={() => toggleSection('service')}
            ></i>
          </h4>
          
            <p className={serviceOpen ? 'visible' : ''}>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entrainera une exclusion de notre plateforme.
            </p>
            
          
        </div>

        <div className='about-securite'>
          <h4>
            <span>Sécurité</span>
            <i
              className={`fa-solid ${securiteOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}
              onClick={() => toggleSection('securite')}
            ></i>
          </h4>
          
            <p className={securiteOpen ? 'visible' : ''}>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
              correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
              qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
              organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          
        </div>
      </div>
    </>
  );
}

export default About;
