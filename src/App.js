// App.js
import React from 'react';
import './App.css';

import Header from './header';

import Home_Page from './View/Home_page';
import Pacientes_page from './View/Pacientes_page';
import Seguimiento_page from './View/Seguimiento';

function App() {
    return (
        <div className="App">
            <Seguimiento_page/>
        </div>
    );
}

export default App;
