import React, { useState } from 'react';
import '../NavBar/NavBar.scss';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  // Étape 1: Déclaration de l'état local avec useState
  const [activeNavItem, setActiveNavItem] = useState(null);

  // Étape 3: Fonction pour gérer le clic sur un élément de navigation
  const handleItemClick = (index) => {
    // Mise à jour de l'état avec l'index de l'élément cliqué
    setActiveNavItem(index);
  };

  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src='navlogo.png' alt='logo' />
        </Link>
      </div>
      <ul>
        <li>
          {/* Étape 4: Utilisation de l'état pour appliquer des classes CSS */}
          <NavLink
            to='/'
            activeclassname='active-link'
            onClick={() => handleItemClick(0)}
            className={activeNavItem === 0 ? 'active-nav-item' : ''}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          {/* Étape 4: Utilisation de l'état pour appliquer des classes CSS */}
          <NavLink
            to='/about'
            activeclassname='active-link'
            onClick={() => handleItemClick(1)}
            className={activeNavItem === 1 ? 'active-nav-item' : ''}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
