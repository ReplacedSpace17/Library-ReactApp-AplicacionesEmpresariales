
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
function PacientesOptions() {

  const navigate = useNavigate(); // Get the navigation function


  return (
    <html>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'></link>
      <header>
        <Header />
      </header>
      <body className='containerPacientesMenu'>

        <h3 className='secondTittle'>Welcome</h3>

        <div className='TablecontainerPacientes'>
          <table class="pacientes-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
    <tr>
        <td>Juan</td>
        <td>Pérez</td>
        <td>Gómez</td>
        <td>35</td>

    </tr>
    <tr>
        <td>Maria</td>
        <td>Rodríguez</td>
        <td>López</td>
        <td>28</td>
        <td><div className='iconTable'><img src={editIcon} className='iconIMG'/></div>
        </td>
        <td><div className='iconTable'><img src={deleteIcon} className='iconIMG'/></div>
        </td>
    </tr>
    
</tbody>

          </table>
        </div>



      </body>
    </html>
  );
}

export default PacientesOptions;
