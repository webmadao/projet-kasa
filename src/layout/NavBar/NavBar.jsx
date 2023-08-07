import React from 'react';
import '../NavBar/NavBar.scss';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/home'>
          <img src='navlogo.png' alt='logo' />
        </Link>
      </div>
      <ul>
        <li><NavLink exact to='/home' activeClassName='active-link'>Accueil</NavLink></li>
        <li><NavLink exact to='/about' activeClassName='active-link'>A propos</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
