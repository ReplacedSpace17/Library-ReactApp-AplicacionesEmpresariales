// App.js
import React from 'react';
import './styles/Pacientes.css';
import Header from '../header';

function Home_page() {
    return (
        <div className="App">
            <div className='imgBackground'>
                <Header />
                <h1>Plataforma de desarrollo cognitivo</h1>
            </div>

           
            <div className='back'>
                {/* Contenido del div back */}
            </div>
        </div>
    );
}

export default Home_page;
