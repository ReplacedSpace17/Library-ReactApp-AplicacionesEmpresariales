import React from 'react';
import './Header.css'; // Importa un archivo CSS para estilizar el menú
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // Get the navigation function

  const goToPacientes = () => {
    navigate('/Pacientes'); // Use navigate to go to the '/Pacientes' route
  }
  
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>
          <li className="active">Home</li>
          <li onClick={goToPacientes}>Pacientes</li>
          <li>Expedientes</li>
          <li>Estadísticas</li>
          <li>Actividades</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
