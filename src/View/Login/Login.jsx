import { useEffect, useState } from "react";
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//import axios from 'axios';
import { SHA256 } from 'crypto-js';
import Swal from 'sweetalert2';
//import backendUrl from '../../serverConfig';
//imports de login firebase
import { Alert, Box, Button, Container, Link, TextField, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

import logo from '../../assets/CognitiveX.png';

function errorPassword() {
  Swal.fire({
    icon: 'error',
    title: 'Autenticación fallida',
    text: 'Las credenciales proporcionadas no coinciden para su acceso.',
    confirmButtonColor: '#4CAF50',
    confirmButtonText: 'Reintentar'
  })

}

//---------------------------------------------------------------------function principal
function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const password = "";
  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }

  //login
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword] = useState("");
  const [pass, setPasswordVisible] = useState("");



  const [isVisible, setIsVisible] = useState(false);

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const zoom = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.5)' } });

  const zoomWithDelay = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.5)' },
    config: { delay: 2000 } // Agregar un retraso de 1000ms (1 segundo)
  });

  const slide = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  });

  const fadeInUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' }
  });


  const [isAnimating, setIsAnimating] = useState(false);


  // redirect the user if he's already logged in
  useEffect(() => {
  

  }, [navigate]);




  //ir al home
  //navigate("/loader-Home");
  const onSubmit = async (event) => {
    event.preventDefault();

    //validar con el backend
    
    navigate("/Home");
  };


  function handleUserAdmin() {
    navigate("/LoginSU");
  }

  //-----------------------------------------------------------------return
  return (
    <div id='body'>

      <div id='contenedor_img'>
        <div id='contentHeader'>
        </div>
      

      </div>


      <animated.div style={slide} id="contenedor_form">
        <div id='contenedor_Menu_top'>
          
        </div>
        <img src={logo} id='IconoLoginForm' preload="true"/>

        <animated.h1 style={fade} id="TitleLogin">INICIAR SESIÓN</animated.h1>

        <p>Bienvenido, por favor identifícate</p>
        <form onSubmit={onSubmit}>
          <input id="inpt_Login" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="usuario" placeholder='Correo electrónico' />
          <input id="inpt_Login" type={showPassword ? 'text' : 'password'} value={password2} onChange={(e) => setPassword(e.target.value)}  name="password" placeholder='Contraseña'  />
          <button type="button" onClick={handleTogglePassword} className='btnShow'>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="ico_show" /> {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              </button>
          <button className='buttonLogin'>Iniciar Sesión</button>
        </form>
      </animated.div>
    </div >
  );
}

export default Login;