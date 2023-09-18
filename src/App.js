// App.js
import React from 'react';
import './App.css';

import Header from './header';

import Home_Page from './View/Home_page';
import Pacientes_page from './View/Pacientes_page';
import Seguimiento_page from './View/Seguimiento';

import Login from './View/Login/Login';

function App() {
    return (
        <div className="App">
            <Login/>
        </div>
    );
}

export default App;
