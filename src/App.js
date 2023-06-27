import './App.css';
import Formulario from './componentes/Formulario'
import MostrarDatos from './componentes/MostrarDatos'
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [personas, setPersonas] = useState([]);

  const reNombre = (e) => {
    setNombre(e.target.value);
  }

  const reEdad = (e) => {
    setEdad(e.target.value);
  }

  const enviarDatos = (event) => {
    event.preventDefault();// llamamos a event.preventDefault() para evitar que el formulario se envíe y se recargue la página.
    
    const persona = {
      nombre: nombre,
      edad: edad
    };
  
    const personasEnStorage = localStorage.getItem('PERSONAS');
    let personasArray = [];
  
    if (personasEnStorage) {
      personasArray = JSON.parse(personasEnStorage);
    } else {
      personasArray = [];
    }
    
  
    personasArray.push(persona);
    setPersonas(personasArray);
    localStorage.setItem('PERSONAS', JSON.stringify(personasArray));
  
    setNombre("");
    setEdad("");
  }
  

  return (
    <>
      <Formulario
        reNombre={reNombre}
        reEdad={reEdad}
        enviarDatos={enviarDatos}
      />
      <MostrarDatos personas={personas} />
    </>
  );
}

export default App;

// Ejercicio
// Guardar y cargar datos en el localStorage:

// Crea un componente de React con un formulario que tenga campos para el nombre y la edad de una persona.
// Al enviar el formulario, utiliza JSON.stringify para convertir los datos en un objeto JSON.
// Guarda el objeto JSON en el localStorage utilizando una clave específica.
// Crea otro componente que cargue los datos del localStorage y los muestre en la interfaz de usuario utilizando JSON.parse.
