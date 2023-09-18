
// App.js
import React from 'react';
import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';
import '../styles/pacientesMenu.css';

function PacientesMenu() {
    return (
        <div className="contentMenu">
            
           <div className='contentOptionsMenu'>
            <div className='option'>Agregar</div>
            <div className='option'>Modificar</div>
            <div className='option'>Eliminar</div>
           </div>
        </div>
    );
}

export default PacientesMenu;
