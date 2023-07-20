import React from 'react';
import '../styles/NavBar.css'
function NavBar() {
    return (
    <nav className='navbar'>
    <div className='nav-logo'>
        <img src='navlogo.png' alt='logo' />
    </div>
       <ul>
        <li>Accueil</li>
        <li>A propos</li>
        </ul>
    </nav>
    );
    }

export default NavBar