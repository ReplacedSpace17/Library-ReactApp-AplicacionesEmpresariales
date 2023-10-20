
// App.js

import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';

import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import backendUrl from '../../configServer';
import Swal from 'sweetalert2';

function PersonalAdd() {

    const navigate = useNavigate(); // Get the navigation function

    const Home = () => {
        navigate('/Home', { state: { personalData } });
      }
      const Back = () => {
        navigate(-1);
      }

       // Estado para almacenar los datos del paciente
    const [personalData, setPersonal] = useState({
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
        setPersonal({ ...personalData, [name]: value });
    }


    const handleSubmit = (e) => {
    e.preventDefault();



    // Ahora puedes realizar operaciones de guardado en la base de datos o cualquier otra acción
    // con la instancia 'paciente', por ejemplo, enviándola a tu servidor.

    // Ejemplo de cómo enviar la instancia al servidor usando axios
    axios.post(backendUrl+'/api/usuarios/add', personalData)
      .then(response => {
        // Realizar acciones después de guardar exitosamente (por ejemplo, redireccionar).
        if (response.status === 201) {
            // La solicitud se completó con éxito (código de estado 200 OK).
            // Realiza acciones después de guardar exitosamente, por ejemplo, redirigir.
            console.log('Guardado exitosamente');
            // Ejemplo de redirección a una página de éxito.
            // navigate('/exito');
            Swal.fire({
                icon: 'success',
                title: 'Agregado',
                text: 'Se agregó correctamente',
                confirmButtonColor: '#4CAF50',
                confirmButtonText: 'Aceptar'
              });
            
            Home();
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

                <h3 className='secondTittle'>Agregar nuevo usuario</h3>
                <p>No dejes ningún campo en blanco</p>
                <div className='containerForm'>
                <form className='formPacientes' onSubmit={handleSubmit}>
                    <input
                        className='inputForm'
                        type='email'
                        name='Email'
                        placeholder='Correo electrónico'
                        value={personalData.Nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='inputForm'
                        type='password'
                        name='Password'
                        placeholder='Contraseña'
                        value={personalData.Password}
                        onChange={handleChange}
                        required
                    />
                     <input
                        className='inputForm'
                        type='text'
                        name='nombre'
                        placeholder='Nombre(s)'
                        value={personalData.Nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='inputForm'
                        type='text'
                        name='apellidoPaterno'
                        placeholder='Apellido Paterno'
                        value={personalData.ApellidoP}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='inputForm'
                        type='text'
                        name='apellidoMaterno'
                        placeholder='Apellido Materno'
                        value={personalData.ApellidoM}
                        onChange={handleChange}
                        required
                    />
                    <div className='contentInput'>
                        <input
                            className='inputTelefono'
                            type="number"
                            name='telefono'
                            placeholder='Telefono'
                            value={personalData.Telefono}
                            onChange={handleChange}
                            required
                        />
                        <select
                            className='inputSexo'
                            name='Genero'
                            value={personalData.Genero}
                            onChange={handleChange}
                            required
                        >
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <input
                        className='inputForm'
                        type='text'
                        name='Cargo'
                        placeholder='Cargo'
                        value={personalData.Cargo}
                        onChange={handleChange}
                    />
                     <input
                        className='inputForm'
                        type='text'
                        name='especialidad'
                        placeholder='Especialidad'
                        value={personalData.Especialidad}
                        onChange={handleChange}
                    />
                    
               
                    <button className='ButtonPrimary' >Siguiente</button>
                </form>
            </div>
            </body>
        </html>
    );
}

export default PersonalAdd;
