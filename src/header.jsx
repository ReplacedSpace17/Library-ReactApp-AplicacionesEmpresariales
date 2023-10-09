import React from 'react';
import './Header.css'; // Importa un archivo CSS para estilizar el menú
import { useNavigate } from "react-router-dom";

import logo from './assets/CognitiveX-logo.png'
function Header() {
  const navigate = useNavigate(); // Get the navigation function

  const goToPacientes = () => {
    navigate('/Pacientes'); // Use navigate to go to the '/Pacientes' route
  }
  
  return (
    <header className="header">
      <div className="logo">
      <img src={logo}></img>
      </div>
      <nav className="nav">
        <ul>
          <li >Home</li>
          <li onClick={goToPacientes}>Pacientes</li>
          <li>Personal</li>
          <li>Expedientes</li>
          <li>Estadísticas</li>
          <li>Actividades</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
