import React from 'react';
import "../Home/App.scss";
import Banner from '../../components/Banner/Banner';
import Main from '../../components/Main/Main';

// Composant fonctionnel App
function App() {
    return(
        <div className="home" >
            {/* Affichage de la bannière avec une image */}
            <Banner image="./images/mer.png" />
            {/* Affichage du titre */}
            <h2>Chez vous, partout et ailleurs</h2>
            {/* Affichage du composant Main */}
            <Main />
        </div>
    );
}

export default App;
