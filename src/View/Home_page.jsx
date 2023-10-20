// App.js
import React from 'react';
import './styles/Pacientes.css';
import Header from '../header';
import { useLocation } from 'react-router-dom';

function Home_page() {
    const location = useLocation();
  const { uid } = location.state;

    return (
        <div className="App">
            <div className='imgBackground'>
                <Header />
               
            </div>

           
            <div className='back'>
                {/* Contenido del div back */}
                <h1>hola {uid}</h1>
            </div>
        </div>
    );
}

export default Home_page;
