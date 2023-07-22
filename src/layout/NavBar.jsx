import React from 'react';
import '../layout/NavBar.css';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
    <nav className='navbar'>
        <div className='nav-logo'>
            <Link to='/App'>
            <img src='navlogo.png' alt='logo' />
            </Link>
        </div>
        <ul>
            <li><Link to='/App'>Accueil</Link></li>
            <li><Link to='/about'>A propos</Link></li>
        </ul>
    </nav>
    );
    }

export default NavBar