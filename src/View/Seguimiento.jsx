// App.js
import React from 'react';
import './styles/Seguimiento.css';
import Header from '../header';

function Seguimiento_page() {
    return (
        <div className="App">
            <div className='imgBackground'>
                <Header />
                <h1>Plataforma de desarrollo cognitivo</h1>
            </div>

            <div className="centeredDiv">
                {/* Contenido del div centrado */}
                <div><h1>Seguimiento</h1></div>
                <div className='f1'>
                    <input type="text" placeholder="Id de usuario" />
                    <button>Buscar</button>  
                </div>
                <div className='line'></div>
                <div>
                    <p>Progreso</p>
                </div>
                <div className='row'>
                    <p>Tiempo invertido</p>
                    <p>Actividad destacada</p>
                    <p>Actividad deficiente</p>
                    <p>Habilidad</p>
                    <p>Refuerzo</p>
                </div>
                <div className='line'></div>
                <div>
                    <p>Historial</p>
                </div>
                <div className='row'>
                    <p>Actividad</p>
                    <p>Tiempo</p>
                    <p>Tipo</p>
                    <p>Nivel</p>
                    <p>Observación</p>
                </div>
                
                <div className='f3'> </div>
            </div>
            <div className='back'>
                {/* Contenido del div back */}
            </div>
        </div>
    );
}

export default Seguimiento_page;
