
// App.js
import React from 'react';
import '../styles/Login.css';
import Header from '../../header';
import montain from '../img/loginImage.png';
import logo from '../img/CognitiveX-logo.svg';

function Login() {
    return (
        <div className="ContentLogin">
           <div className='imgContent'>
            <img className="Image" src={montain}/>
           </div>
           <div className='contentForm'>
            <div className='logoContent'><img className="logo" src={logo}/></div>
            <h1>INICIAR SESIÓN</h1>
            <p>Bienvenido, por favor indentifícate</p>
            <input className="inputLogin" type='text' placeholder='Correo electrónico'/>
            <input className="inputLogin" type='text' placeholder='Contraseña'/>
            <button className='btnLogin'>Iniciar Sesion</button>
           </div>
        </div>
    );
}

export default Login;
