
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

import { useNavigate } from "react-router-dom";
function PacientesAdd3() {


    
    const navigate = useNavigate(); // Get the navigation function


    const NavSiguiente = () => {
        navigate('/Pacientes');
      }
      const Back = () => {
        navigate(-1);
      }
    return (
        <html>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>

                <h3 className='secondTittle'>Información Médica</h3>
                <p>No dejes ningún campo en blanco</p>
                <div className='containerForm'>
                    <form className='formPacientes'>

                        <select className='inputForm' placeholder='Enfermedades crónicas'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>

                        <select className='inputForm' placeholder='Alergias'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>

                

                        <input className='inputForm' type='text' placeholder='Antecedentes' />

                        <input className='inputForm' type='text' placeholder='Medicamentos' />

                 

                        <input type='button' className='ButtonSecondary' onClick={Back} value="Regresar"/>
                        <button className='ButtonPrimary' onClick={NavSiguiente}>Enviar información</button>

                    </form>
                </div>
            </body>
        </html>
    );
}

export default PacientesAdd3;
