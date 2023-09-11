// App.js
import React from 'react';
import './styles/Pacientes.css';
import Header from '../header';

function Pacientes_page() {
    return (
        <div className="App">
            <div className='imgBackground'>
                <Header />
                <h1>Plataforma de desarrollo cognitivo</h1>
            </div>

            <div className="centeredDiv">
                {/* Contenido del div centrado */}
                <div><h1>Pacientes</h1></div>
                <div className='f1'>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido Paterno" />
                    <input type="text" placeholder="Apellido Materno" />
                </div>
                <div className='f2'>
                    <input type="number" placeholder="Edad" />
                    <select>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </div>
                <div className='f3'> <button>Agregar</button></div>
            </div>
            <div className='back'>
                {/* Contenido del div back */}
            </div>
        </div>
    );
}

export default Pacientes_page;
