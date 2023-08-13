import React from 'react';

import "../Home/App.scss";
import NavBar from '../../layout/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../layout/Footer/Footer';
import Main from '../../components/Main/Main';

function App() {
    return(
        <div className="home" >
            <Banner image="./images/mer.png" />
            <h2>Chez vous, partout et ailleurs</h2>
            <Main />
            
        </div>
    )
    
}

export default App
