import React from 'react';
import './Header.css'; // Importa un archivo CSS para estilizar el menú

function Header() {
  return (
    <header className="header">
    <div className="logo">Logo</div>
    <nav className="nav">
      <ul>
        <li className="active">Home</li>
        <li>Pacientes</li>
        <li>Expedientes</li>
        <li>Estadísticas</li>
        <li>Actividades</li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
