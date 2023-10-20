
// App.js
import React from 'react';
import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';
import './stylePacientes.css';
import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
function PacientesMenu() {

    const location = useLocation();
    const { uid } = location.state;

    const navigate = useNavigate(); // Get the navigation function

    const NavTablePacientes = () => {
        navigate('/PacientesOptions',{ state: { uid } });
      }

      const NavAddPacientes = () => {
        navigate('/FormPacientes1',{ state: { uid } });
      }
      
    return (
        <html>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>

                <h3 className='secondTittle'>Welcome</h3>
                <h1 className='primaryTittle'>Pacientes</h1>
                <div className='containerBlur'>
                    
                    <h3 className='TittleBlur'>Módulo de Pacientes</h3>
                    <p className='textoBlur'>El módulo permite agregar, eliminar, modificar pacientes para asignar actividades y rutinas posteriormente con la finalidad de llevar su registro.</p>
                </div>
                <div className='containerButtons'>
                    <div className='cardButton' onClick={NavAddPacientes}>
                        <img className='iconButton' src={addIcon}/>
                        <label className='txtButtonCard'>Agregar</label>
                    </div>
                    <div className='cardButton' onClick={NavTablePacientes}>
                        <img className='iconButton' src={editIcon}/>
                        <label className='txtButtonCard'>Modificar</label>
                    </div>
                    <div className='cardButton' onClick={NavTablePacientes}>
                        <img className='iconButton' src={deleteIcon}/>
                        <label className='txtButtonCard'>Eliminar</label>
                    </div>
                </div>


            </body>
        </html>
    );
}

export default PacientesMenu;
