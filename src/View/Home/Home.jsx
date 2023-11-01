
// App.js
import React from 'react';
import '../styles/Home.css';
import Header from '../../header';
import montain from '../img/loginImage.png';
import fondo from '../img/Home.png';
import { useLocation } from 'react-router-dom';
import fondo2 from '../../assets/fondoHome.png';
function Home() {
   
  
    return (
        <div className="ContentHome">
        <Header />
        <div className="contentIMGFondo">
        <h1 className='TitleHome'>Welcome</h1>
        <h1 className='SubTitleHome'>Home</h1>
          
        </div>
      </div>
      
    );
}

export default Home;
