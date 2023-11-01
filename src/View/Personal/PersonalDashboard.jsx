
// App.js

import '../styles/Login.css';

import image from '../img/fondoPaciente.png';
import logo from '../img/CognitiveX-logo.svg';
import Header from '../../header';

import addIcon from '../../assets/icons/addIcon.png';
import viewIcon from '../../assets/icons/ojo.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de importar axios o la biblioteca que estés utilizando para hacer solicitudes HTTP.
// Otras importaciones...
import backendUrl from '../../configServer';
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";

function PersonalDashboard() {
  const navigate = useNavigate();
  const [pacientes, setPacientes] = useState([]);


  const deleteUsuario = (id) => {

    Swal.fire({
      title: '¿Seguro que quieres eliminarlo?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Accept',
      denyButtonText: `Don't save`,
      willClose: () => {
        // Este código se ejecuta cuando el alert se cierra
        window.location.reload();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(backendUrl + '/api/usuarios/delete/' + id)
          .then(response => {
            if (response.status === 200) {
              Swal.fire('Eliminado!', '', 'success');
            }
            
          })
          .catch(error => {
            console.error('Error al eliminar paciente:', error);
          });
      } else if (result.isDenied) {
        // Hacer algo si se deniega
      }
    });
    

    
  }
  
  const viewPersonal = (paciente) => {
    var Nombre = paciente.nombre;

    Swal.fire({
        title: 'Información del usuario' ,
        icon: 'info',
        html:
          '<b>Nombre: </b> ' +  paciente.nombre + '<br>' +
          '<b>Apellido Paterno: </b> ' +  paciente.apellidop + '<br>' +
          '<b>Apellido Materno: </b> ' +  paciente.apellidom + '<br>' +
          '<b>Email: </b> ' +   paciente.email + '<br>' +
          '<b>Password:  </b> '   + paciente.password + '<br>' +
          '<b>Telefono:  </b> '   + paciente.telefono + '<br>' +
          '<b>Genero:  </b> ' +  paciente.genero + '<br>' +
          '<b>Cargo:  </b> ' +  paciente.cargo + '<br>' +
          '<b>Especialidad: </b> '+ paciente.especialidad + '<br>',
        
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Aceptar!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  }

  const goToEdit = (data) => {

   
    navigate('/ModifyPersonal', { state: { data } });
  }

 

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los datos de pacientes
    axios.get(backendUrl+'/api/usuarios/all') // Ajusta la URL de la API según tu configuración
      .then(response => {
        setPacientes(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de pacientes:', error);
      });
  }, []);

  return (
    <html>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
    <header>
      <Header />
    </header>
    <body className='containerPacientesMenu'>

      <h3 className='secondTittle'>Welcome Usuarios</h3>

      <div className='TablecontainerPacientes'>
        <table class="pacientes-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Email</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
        {pacientes.map(paciente => (
          <tr key={paciente.uid}>
            <td>{paciente.nombre}</td>
            <td>{paciente.apellidop}</td>
            <td>{paciente.apellidom}</td>
            <td>{paciente.email}</td>
            <td className='iconTable'  onClick={() => viewPersonal(paciente)}><img src={viewIcon} className='iconIMG'/></td>
            <td className='iconTable'  onClick={() => goToEdit(paciente)}><img src={editIcon} className='iconIMG'/></td>
            <td className='iconTable'  onClick={() => deleteUsuario(paciente.uid)}><img src={deleteIcon} className='iconIMG'/></td>
          </tr>
        ))}
      </tbody>

        </table>
      </div>



    </body>
  </html>
  );
}

export default PersonalDashboard;
