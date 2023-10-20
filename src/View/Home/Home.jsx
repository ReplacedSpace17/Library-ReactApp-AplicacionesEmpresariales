
// App.js
import React from 'react';
import '../styles/Home.css';
import Header from '../../header';
import montain from '../img/loginImage.png';
import fondo from '../img/Home.png';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const { uid } = location.state;
  
    return (
        <div className="ContentHome">
            <Header uid={uid} />
          <h1>{uid}</h1>
        </div>
    );
}

export default Home;
