import React from 'react';
import './Header.css'; // Importa un archivo CSS para estilizar el menú
import { useNavigate } from "react-router-dom";

function Header({uid}) {

  const navigate = useNavigate(); // Get the navigation function

  const goToHome = () => {
    navigate('/HomeLibrary' ,{ state: { uid } }); // Use navigate to go to the '/Pacientes' route
  }

  return (
    <header className="header">
      <div className="logo">
    <h1>Librería Siglo XXI</h1>
      </div>
      <nav className="nav">
        <ul>
          <li onClick={goToHome}>Inicio</li>
            
        </ul>
      </nav>
    </header>
  );
}

export default Header;
