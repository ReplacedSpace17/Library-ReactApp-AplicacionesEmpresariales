

import Header from '../../header';
import './styleMenuActivitie.css';
import addIcon from '../../assets/icons/addIcon.png';
import deleteIcon from '../../assets/icons/deleteIcon.png';
import editIcon from '../../assets/icons/editIcon.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import backendUrl from '../../configServer';
import Swal from 'sweetalert2';

function ActivityMenu() {

    const navigate = useNavigate(); // Get the navigation function

    const AddRutina = () => {
        navigate('/RutinaAdd');
      }

  return (
    <div className="ContentHome">
      <Header />
      <div className="contentActivities">
        <div className="contTitle">
          <h1>Rutinas</h1>
        </div>
        <div className="contSub">
          <h2>Seleccionar paciente</h2>
          <p>select</p>
        </div>
        <div className="contTable">
        <table border="1">
        <tr>
            <th>Nombre de Rutina</th>
            <th colspan="4">Acciones</th>
        </tr>
        <tr>
            <td>Rutina 1</td>
            <td><a href="#">Ver</a></td>
            <td><a href="#">Editar</a></td>
            <td><a href="#">Eliminar</a></td>
            <td><a href="#">Play</a></td>
        </tr>
       
    </table>   


        </div>
        <div className="contFooter">
          <button onClick={AddRutina}>Agregar</button>
        </div>
      </div>


    </div>

  );
}
export default ActivityMenu;