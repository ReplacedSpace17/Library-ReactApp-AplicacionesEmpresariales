import React from 'react';
import './Header.css'; // Importa un archivo CSS para estilizar el menú

function Header() {
  return (
    <div className="header">
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Seguimiento</a></li>
        <li><a href="#">Pacientes</a></li>
        <li><a href="#">Actividades</a></li>
      </ul>
    </div>
  );
}

export default Header;
