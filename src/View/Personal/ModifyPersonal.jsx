
// App.js

import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';
import { useNavigate, useLocation } from 'react-router-dom';

import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import axios from 'axios';

import React, { useState } from 'react';
import backendUrl from '../../configServer';
import Swal from 'sweetalert2';


function ModifyPersonal() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state; // Obten los datos del usuario a editar

    // Inicializa el estado con los datos del usuario
    const [userData, setUserData] = useState(data);


    const Home = () => {
        navigate('/Home', { state: { personalData } });
    }
    const Back = () => {
        navigate(-1);
    }

    // Estado para almacenar los datos del paciente
    const [personalData, setPersonal] = useState({
        UID: "U00222",
        PID: "",
        nombre: "",
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


    const handleEditSubmit = (e) => {
        e.preventDefault();

        //constuir json
        const newData = {
            email: userData.email,
            password: userData.password,
            nombre: userData.nombre,
            apellidop: userData.apellidop,
            apellidoM: userData.apellidom,
            telefono: userData.telefono,
            genero: userData.genero,
            cargo: userData.cargo,
            especialidad: userData.especialidad
        }
        // Realiza la solicitud de actualización al servidor con los datos de userData
        axios.put(backendUrl + `/api/usuarios/update/${userData.uid}`, userData)
            .then((response) => {
                if (response.status === 200) {
                    // Redirige al usuario a la página de detalles del usuario o a donde desees
                    navigate(-1);
                }
            })
            .catch((error) => {
                console.error('Error al editar usuario:', error);
            });
    };

    return (
        <html>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>

                <h3 className='secondTittle'>Modificar usuario {data.telefono}</h3>
                <p>No dejes ningún campo en blanco</p>
                <div className='containerForm'>
                    <form className='formPacientes' onSubmit={handleEditSubmit}>
                        <input
                            className='inputForm'
                            type='email'
                            name='Email'
                            placeholder='Correo electrónico'
                            value={userData.email} // Usa userData.email como valor
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            required
                        />
                        <input
                            className='inputForm'
                            type='password'
                            name='Password'
                            placeholder='Contraseña'
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            required
                        />
                        <input
                            className='inputForm'
                            type='text'
                            name='nombre'
                            placeholder='Nombre(s)'
                            value={userData.nombre}
                            onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
                            required
                        />
<input
  className='inputForm'
  type='text'
  name='apellidoPaterno' // Nombre único para Apellido Paterno
  placeholder='Apellido Paterno'
  value={userData.apellidop}
  onChange={(e) => setUserData({ ...userData, apellidop: e.target.value })}
  required
/>

<input
  className='inputForm'
  type='text'
  name='apellidoMaterno' // Nombre único para Apellido Materno
  placeholder='Apellido Materno'
  value={userData.apellidom}
  onChange={(e) => setUserData({ ...userData, apellidom: e.target.value })}
  required
/>

                        <div className='contentInput'>
                            <input
                                className='inputTelefono'
                                type="number"
                                name='telefono'
                                placeholder='Telefono'
                                value={userData.telefono}
                                onChange={(e) => setUserData({ ...userData, telefono: e.target.value })}
                                required
                            />
                            <select
                                className='inputSexo'
                                name='Genero'
                                value={userData.genero}
                                onChange={(e) => setUserData({ ...userData, genero: e.target.value })}
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
                            value={userData.cargo}
                            onChange={(e) => setUserData({ ...userData, cargo: e.target.value })}
                        />
                        <input
                            className='inputForm'
                            type='text'
                            name='especialidad'
                            placeholder='Especialidad'
                            value={userData.especialidad}
                            onChange={(e) => setUserData({ ...userData, especialidad: e.target.value })}
                        />
                        <button className='ButtonPrimary' type="submit">Siguiente</button>
                    </form>
                </div>
            </body>
        </html>
    );
}

export default ModifyPersonal;
