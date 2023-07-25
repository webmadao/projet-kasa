import React from 'react';
import '../layout/NavBar.scss';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
    <nav className='navbar'>
        <div className='nav-logo'>
            <Link to='/home'>
            <img src='navlogo.png' alt='logo' />
            </Link>
        </div>
        <ul>
            <li><Link to='/home'>Accueil</Link></li>
            <li><Link to='/about'>A propos</Link></li>
        </ul>
    </nav>
    );
    }

export default NavBar