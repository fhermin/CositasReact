import React from "react";
import '../Stylesheets/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
      <button
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClic}>
        {texto}
      </button>
    );
  }
  
  export default Boton;