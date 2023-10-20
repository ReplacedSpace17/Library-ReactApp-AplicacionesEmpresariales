
// App.js
import React, { useState } from 'react';
import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';
import './stylePacientes.css';
import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';

import { useNavigate, useLocation} from "react-router-dom";

function PacientesAdd2() {

    const navigate = useNavigate(); // Get the navigation function

    const NavSiguiente = () => {
        navigate('/FormPacientes3', { state: { pacienteData2 } });
      }
    
      const Back = () => {
        navigate(-1);
      }

      const location = useLocation();
    
      // Obtener los datos del paciente de props.location.state
      const pacienteData = location.state && location.state.pacienteData;
      const a = () => {
        alert(pacienteData.Nombre);
      }

      const [pacienteData2, setPacienteData] = useState({
        UID: pacienteData.UID,
        Nombre: pacienteData.Nombre,
        ApellidoP: pacienteData.ApellidoP,
        ApellidoM: pacienteData.ApellidoM,
        Genero: pacienteData.Genero,
        Direccion: pacienteData.Direccion,
        telefono: pacienteData.telefono,
        FechaIngreso: pacienteData.FechaIngreso,
        FechaNacimiento: pacienteData.FechaNacimiento

    });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setPacienteData({ ...pacienteData2, [name]: value });
    }


    return (
        <html>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>

                <h3 className='secondTittle'>Información social</h3>
                <p>No dejes ningún campo en blanco</p>
                <div className='containerForm'>
                    <form className='formPacientes'>

                        <input className='inputForm' 
                        type='text' placeholder='Nivel educativo'
                        name='NivelEducativo'
                        value={pacienteData.NivelEducativo}
                        onChange={handleChange}/>

                        <input className='inputForm' type='text' 
                        placeholder='Profesión'
                        name='Profesion'
                        value={pacienteData.Profesion}
                        onChange={handleChange}/>

                        <input className='inputForm' type='text' 
                        placeholder='Estado Civil'
                        name='EstadoCivil'
                        value={pacienteData.EstadoCivil}
                        onChange={handleChange}/>

                        <input type='button' className='ButtonSecondary' onClick={a} value="Regresar"/>
                        <button className='ButtonPrimary' onClick={NavSiguiente}>Siguiente</button>
                        
                    </form>
                   
                </div>
            </body>
        </html>
    );
}

export default PacientesAdd2;
