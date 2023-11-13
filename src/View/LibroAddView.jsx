


import Header from '../header';

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import backendUrl from '../configServer';
import Swal from 'sweetalert2';
import './styleAdd.css';
function LibraryAdd() {
    const [autores, setAutores] = useState([]);
    const [selectedAutor, setSelectedAutor] = useState(null);

    useEffect(() => {
        // Realiza una solicitud al servidor para obtener los datos de pacientes
        axios.get(backendUrl + '/api/autores') // Ajusta la URL de la API según tu configuración
            .then(response => {
                setAutores(response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos de pacientes:', error);
            });


    }, []);

    const navigate = useNavigate(); // Get the navigation function

    const Home = () => {
        navigate('/HomeLibrary');
    }
    const Back = () => {
        navigate(-1);
    }

    // Estado para almacenar los datos del paciente
    const [bookData, setBook] = useState({

        author_id: selectedAutor
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...bookData, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();



        // Ahora puedes realizar operaciones de guardado en la base de datos o cualquier otra acción
        // con la instancia 'paciente', por ejemplo, enviándola a tu servidor.

        // Ejemplo de cómo enviar la instancia al servidor usando axios
        axios.post(backendUrl + '/api/libros/add', bookData)
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

    const addAutor = async () => {
        // Usa Swal.fire para obtener el nombre del autor
        const { value: autorNombre } = await Swal.fire({
            title: 'Cual es el nombre del autor?',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonText: 'Agregar',
        });

        // Si el usuario hizo clic en "Agregar", realiza la solicitud al backend
        if (autorNombre) {
            try {
                // Realiza la solicitud al backend para agregar un nuevo autor
                const response = await axios.post(backendUrl + '/api/autores/add', {
                    name: autorNombre,
                });

                // Muestra una alerta con la respuesta del backend
                Swal.fire({
                    title: 'Autor agregado',
                    text: response.data.mensaje,
                    icon: 'success',
                }).then(() => {
                    // Recargar la página después de cerrar la alerta de éxito
                    window.location.reload();
                });
            } catch (error) {
                // Muestra una alerta en caso de error
                Swal.fire({
                    title: 'Error',
                    text: 'Error al agregar autor',
                    icon: 'error',
                });
            }
        }
    };

  

    return (
        <html>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
            <header>
                <Header />
            </header>
            <body className='containerPacientesMenu'>
                <h3 className='secondTittle'>Agregar nuevo libro</h3>
                <div className='containerForm'>
                    <form className='formPacientes' onSubmit={handleSubmit}>


                        <select
                            className='inputForm'
                            id="pacientesSelect"
                            value={bookData.author_id}
                            name='author_id'
                            onChange={handleChange}
                        >
                            <option value={null}>Selecciona un autor</option>
                            {autores.map(autor => (
                                <option key={autor.id} value={autor.id}>
                                    {autor.name}
                                </option>
                            ))}
                        </select>
                        <button className='ButtonPrimary' onClick={addAutor}>Agregar autor</button>
                        <input
                            className='inputForm'
                            type='text'
                            name='title'
                            placeholder='Titulo'
                            value={bookData.title}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='inputForm'
                            type='number'
                            name='chapters'
                            placeholder='Capítulo'
                            value={bookData.chapters}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='inputForm'
                            type='number'
                            name='pages'
                            placeholder='Páginas'
                            value={bookData.pages}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='inputForm'
                            type='number'
                            name='price'
                            placeholder='Precio'
                            value={bookData.price}
                            onChange={handleChange}
                            required
                        />


                     
                        <button className='ButtonPrimary' >Finalizar</button>
                    </form>
                </div>
            </body>
        </html>
    );
}

export default LibraryAdd;
