
// App.js
import React from 'react';


import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';

import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
function PersonalMenu() {

    const location = useLocation();


    const navigate = useNavigate(); // Get the navigation function

    const NavTablePersonal = () => {
        navigate('/PersonalDashboard');
      }

      const NavAddPersonal = () => {
        navigate('/PersonalAdd');
      }
      
    return (
        <html>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>

                <h3 className='secondTittle'>Welcome</h3>
                <h1 className='primaryTittle'>Personal</h1>
                <div className='containerBlur'>
                    
                    <h3 className='TittleBlur'>Módulo de personal</h3>
                    <p className='textoBlur'>El módulo permite agregar, eliminar, modificar usuarios.</p>
                </div>
                <div className='containerButtons'>
                    <div className='cardButton' onClick={NavAddPersonal}>
                        <img className='iconButton' src={addIcon}/>
                        <label className='txtButtonCard'>Agregar</label>
                    </div>
                    <div className='cardButton' onClick={NavTablePersonal}>
                        <img className='iconButton' src={editIcon}/>
                        <label className='txtButtonCard'>Modificar</label>
                    </div>
                    <div className='cardButton' onClick={NavTablePersonal}>
                        <img className='iconButton' src={deleteIcon}/>
                        <label className='txtButtonCard'>Eliminar</label>
                    </div>
                </div>


            </body>
        </html>
    );
}

export default PersonalMenu;
