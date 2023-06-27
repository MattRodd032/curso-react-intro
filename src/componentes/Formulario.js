import React from 'react'

function Formulario(props) {
  return (
    <form onSubmit={props.enviarDatos}>
        <div>
            <label htmlFor='insertarNombre'>Nombre:</label>
            <input 
                type="text"
                id='insertarNombre'
                onChange={props.reNombre}
            ></input>
        </div>

        <div>
            <label htmlFor='insertarEdad'>Edad:</label>
            <input 
                type="text"
                id='insertarEdad'
                onChange={props.reEdad}
            ></input>
        </div>

        <button type="submit">Guardar</button>
    </form>
    
  )
}

export default Formulario