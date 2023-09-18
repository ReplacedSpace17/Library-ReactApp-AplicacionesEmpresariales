
// App.js
import React from 'react';
import '../styles/Home.css';
import Header from '../../header';
import montain from '../img/loginImage.png';
import fondo from '../img/formUser.png';

function AddPacientes() {
    return (
        <div className="ContentHome">
            <Header/>
          <img src={fondo} className='fondo'></img>
          <div className="form"> 
            <input type='text' placeholder='Nombre'/>
            <input type='text' placeholder='Apellido paterno'/>
            <input type='text' placeholder='Apellido materno'/>
            <input type='text' placeholder='Sexo'/>
            <input type='text' placeholder='Observaciones'/>

          <button>Enviar</button>
          </div>
        </div>
    );
}

export default AddPacientes;
