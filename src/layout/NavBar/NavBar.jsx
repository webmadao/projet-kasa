import React, { useState } from 'react';
import '../NavBar/NavBar.scss';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleItemClick = (index) => {
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
          <NavLink
            exact="true"
            to='/'
            activeclassname='active-link'
            onClick={() => handleItemClick(0)}
            className={activeNavItem === 0 ? 'active-nav-item' : ''}
          >
            Accueil
          </NavLink>
        </li>

        <li>
        <NavLink
            exact="true"
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
