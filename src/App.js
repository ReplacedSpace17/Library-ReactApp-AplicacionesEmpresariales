// App.js
import React from 'react';
import './App.css';

import Header from './header';

import Home_Page from './View/Home_page';
import Pacientes_page from './View/Pacientes_page';
import Seguimiento_page from './View/Seguimiento';

import Login from './View/Login/Login';
import Home from './View/Home/Home';
import PacientesMenu from './View/Pacientes/PacientesMenu';
import AddPacientes from './View/Pacientes/pacientesAdd';

function App() {
    return (
        <div className="App">

            <AddPacientes/>
        </div>
    );
}

export default App;
