
// App.js

import axios from 'axios';
import Header from '../header';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import backendUrl from '../configServer';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import deleteIcon from '../assets/icons/deleteIcon.png';
import editIcon from '../assets/icons/editIcon.png';
import playIcon from '../assets/icons/playIcon.png';
import './styleLibrary.css';

function LibraryHome() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  const navigate = useNavigate();
  const [libros, setLibros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los datos de pacientes
    axios.get(backendUrl + '/api/libros') // Ajusta la URL de la API según tu configuración
      .then(response => {
        setLibros(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de pacientes:', error);
      });

      axios.get(backendUrl+'/api/pacientes') // Ajusta la URL de la API según tu configuración
      .then(response => {
        setPacientes(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de pacientes:', error);
      });
  }, []);

  const deleteRutina = (id) => {


    axios.delete(backendUrl + '/api/rutinas/delete/' + id)
      .then(response => {
        if (response.status === 200) {
          Swal.fire({
            title: 'Eliminada',
            icon: 'success',

            willClose: () => {
              // Este código se ejecuta cuando el alert se cierra
              window.location.reload();
            }
          });

        }

      })
      .catch(error => {
        console.error('Error al eliminar rutina:', error);
      });


  }
  const deleteBook = async (id) => {
    axios.delete(backendUrl + '/api/libros/'+id)
    .then(response => {
        // Realizar acciones después de guardar exitosamente (por ejemplo, redireccionar).
        if (response.status === 200) {
            // La solicitud se completó con éxito (código de estado 200 OK).
            // Realiza acciones después de guardar exitosamente, por ejemplo, redirigir.
            console.log('Guardado exitosamente');
            // Ejemplo de redirección a una página de éxito.
            // navigate('/exito');
            Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: 'Se eliminó correctamente',
                confirmButtonColor: '#4CAF50',
                confirmButtonText: 'Aceptar'
            }).then(() => {
              // Recargar la página después de cerrar la alerta de éxito
              window.location.reload();
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
  const addBook = () => {
    navigate('/LibraryAdd');
  }
  const goToEdit = (data) => {


    navigate('/ModifyPersonal', { state: { data } });
  }

   const goActividades = () => {
    navigate('/ActividadDashboard');
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLibros = libros.filter(libro =>
    libro.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="ContentHome">
      <Header />
      <div className="contentActivities">
        <div className="contTitle">
          <h1>Lista de libros</h1>
        </div>

        <div className="searchBar">
          <input
            type="text"
            className='inputForm'
            placeholder="Buscar por título"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>


        <div className="contTable">
          <table id='customers'>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Capitulos</th>
                <th>Páginas</th>
                <th>Precio</th>
            
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredLibros.map(libro => (
                <tr key={libro.id}>
                  <td>{libro.title}</td>
                  <td>{libro.author_name}</td>
                  <td>{libro.chapters}</td>
                  <td>{libro.pages}</td>
                  <td>$ {libro.price}</td>
                 
                  <td className='iconTable' onClick={() => deleteBook(libro.id)}>
                    <img src={deleteIcon} className='iconIMG' alt='Delete' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="contFooter">
          <button onClick={addBook}>Agregar Libro</button>
        </div>
      </div>
    </div>
  );
}

export default LibraryHome;
