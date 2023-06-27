import React from 'react'

function MostrarDatos() {
    let personasJSON = localStorage.getItem('PERSONAS');
    let personas = JSON.parse(personasJSON);

  return (
    <div>
      {personas.map((persona, index) => (
        <div key={index}>
          <h2>Nombre: {persona.nombre}</h2>
          <p>Edad: {persona.edad}</p>
        </div>
      ))}
    </div>
  )
}

export default MostrarDatos

// -----------------Explicación Código----------------
// En la primera línea, importamos la biblioteca React necesaria para definir componentes de React.

// Definimos la función MostrarDatos, que representa un componente de React. Este componente muestra los datos almacenados en el localStorage.

// En la línea 3, utilizamos localStorage.getItem('PERSONAS') para obtener el valor almacenado en el localStorage con la clave 'PERSONAS'. Este valor se almacena en la variable personaJSON.

// En la línea 4, utilizamos JSON.parse(personaJSON) para convertir la cadena JSON almacenada en personaJSON en un objeto JavaScript. El resultado se almacena en la variable personas.

// A continuación, en el cuerpo de la función MostrarDatos, definimos el contenido JSX que será renderizado en el navegador.

// Encerramos todo el contenido JSX dentro de un elemento <div> para agrupar los elementos.

// Utilizamos el método map en el array personas para iterar sobre cada objeto persona y generar elementos JSX para mostrar los datos de cada persona.

// Para cada persona, creamos un elemento <div> con un atributo key único que utilizamos para el índice de la iteración.

// Dentro del elemento <div>, mostramos el nombre de la persona utilizando un encabezado <h2> con la propiedad persona.nombre.

// También mostramos la edad de la persona utilizando un párrafo <p> con la propiedad persona.edad.

// Por último, exportamos el componente MostrarDatos utilizando export default MostrarDatos, lo que permitirá que otros archivos puedan importar y utilizar este componente.