import React  from "react";
import "../hojas-de-estilos/Pantalla.css";

//El componente funcional se puede definir como una funcion flecha.
const Pantalla = ( {input} ) => (
    <div className="input">
        {input}
    </div>
);

export default Pantalla;