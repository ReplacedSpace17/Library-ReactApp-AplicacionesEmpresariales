
// App.js

import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';
import './stylePacientes.css';
import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import backendUrl from '../../configServer';

function PacientesAdd1() {

    const navigate = useNavigate(); // Get the navigation function

    const NavSiguiente = () => {
        navigate('/FormPacientes2', { state: { pacienteData } });
      }
      const Back = () => {
        navigate(-1);
      }

       // Estado para almacenar los datos del paciente
    const [pacienteData, setPacienteData] = useState({
        UID: "U00222",
        PID: "P00022",
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        sexo: 'Masculino', // Valor predeterminado
        direccion: '',
        fecha: '',
        ingreso: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPacienteData({ ...pacienteData, [name]: value });
    }


    const handleSubmit = (e) => {
    e.preventDefault();



    // Ahora puedes realizar operaciones de guardado en la base de datos o cualquier otra acción
    // con la instancia 'paciente', por ejemplo, enviándola a tu servidor.

    // Ejemplo de cómo enviar la instancia al servidor usando axios
    axios.post(backendUrl+'/api/paciente/add', pacienteData)
      .then(response => {
        // Realizar acciones después de guardar exitosamente (por ejemplo, redireccionar).
        if (response.status === 200) {
            // La solicitud se completó con éxito (código de estado 200 OK).
            // Realiza acciones después de guardar exitosamente, por ejemplo, redirigir.
            console.log('Guardado exitosamente');
            // Ejemplo de redirección a una página de éxito.
            // navigate('/exito');
            navigate('/FormPacientes2', { state: { pacienteData } });
          } else {
            // La solicitud no se completó con éxito, puedes manejar errores aquí.
            console.log('Error al guardar');
          }
      })
      .catch(error => {
        console.error('Error al guardar paciente:', error);
        // Realizar acciones en caso de error.
      });
  };
    return (
        <html>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>

                <h3 className='secondTittle'>Completa la información</h3>
                <p>No dejes ningún campo en blanco</p>
                <div className='containerForm'>
                <form className='formPacientes' onSubmit={handleSubmit}>
                    <input
                        className='inputForm'
                        type='text'
                        name='nombre'
                        placeholder='Nombre(s)'
                        value={pacienteData.nombre}
                        onChange={handleChange}
                    />
                    <input
                        className='inputForm'
                        type='text'
                        name='apellidoPaterno'
                        placeholder='Apellido Paterno'
                        value={pacienteData.apellidoPaterno}
                        onChange={handleChange}
                    />
                    <input
                        className='inputForm'
                        type='text'
                        name='apellidoMaterno'
                        placeholder='Apellido Materno'
                        value={pacienteData.apellidoMaterno}
                        onChange={handleChange}
                    />
                    <div className='contentInput'>
                        <input
                            className='inputTelefono'
                            type="number"
                            name='telefono'
                            placeholder='Telefono'
                            value={pacienteData.telefono}
                            onChange={handleChange}
                        />
                        <select
                            className='inputSexo'
                            name='sexo'
                            value={pacienteData.sexo}
                            onChange={handleChange}
                        >
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <input
                        className='inputForm'
                        type='text'
                        name='direccion'
                        placeholder='Dirección'
                        value={pacienteData.direccion}
                        onChange={handleChange}
                    />
                    <div className='contentInput'>
                        <input
                            className='inputTelefono'
                            type='date'
                            name='fecha'
                            placeholder='Fecha'
                            value={pacienteData.fecha}
                            onChange={handleChange}
                        />
                        <input
                            className='inputIngreso'
                            type='date'
                            name='ingreso'
                            placeholder='Ingreso'
                            value={pacienteData.ingreso}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type='button'
                        className='ButtonSecondary'
                        onClick={Back}
                        value="Regresar"
                    />
                    <button className='ButtonPrimary' >Siguiente</button>
                </form>
            </div>
            </body>
        </html>
    );
}

export default PacientesAdd1;
