import React, { useState, useEffect } from 'react';
import '../NavBar/NavBar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const location = useLocation();

  const handleItemClick = (index) => {
    setActiveNavItem(index);
  };

  useEffect(() => {
    
    if (location.pathname === '/') {
      setActiveNavItem(0);
    } else if (location.pathname === '/about') {
      setActiveNavItem(1);
    }
  }, [location]);

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
            
            to='/'
            activeClassName='active-link'
            onClick={() => handleItemClick(0)}
            className={activeNavItem === 0 ? 'active-nav-item' : ''}
          >
            Accueil
          </NavLink>
        </li>

        <li>
        <NavLink
  to='/about'
  activeClassName='active-link'
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
