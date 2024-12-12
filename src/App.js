import React from 'react';
import './App.css';
import Andres from './componentes/andres';
import Diego from './componentes/diego';
import Joao from './componentes/joao';
import Pepillo from './componentes/pepillo';
import Ricardo from './componentes/ricardo';
import Helmer from './componentes/Helmer'; 



function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>👨‍💻 Sistemas Tercer Año 🧑‍💻</h1>
        <p>Conoce a nuestros increíbles desarrolladores y sus lenguajes favoritos:</p>
      </header>
      <main className="app-main">
        <Pepillo />
        <Ricardo />
        <Andres />
        <Diego />
        <Joao />
        <Helmer /> 
      </main>
    </div>
  );
}

export default App;
