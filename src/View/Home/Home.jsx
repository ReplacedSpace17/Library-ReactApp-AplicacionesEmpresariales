
// App.js
import React from 'react';
import '../styles/Home.css';
import Header from '../../header';
import montain from '../img/loginImage.png';
import fondo from '../img/Home.png';

function Home() {
    return (
        <div className="ContentHome">
            <Header/>
          <img src={fondo} className='fondo'></img>
        </div>
    );
}

export default Home;
