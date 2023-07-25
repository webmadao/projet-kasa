import React from 'react';
import "../pages/App.scss";
import NavBar from '../layout/NavBar';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import Footer from '../layout/Footer';

function App() {
    return(
        <div>
            <Banner />
            <Card />
        </div>
    )
    
}

export default App
