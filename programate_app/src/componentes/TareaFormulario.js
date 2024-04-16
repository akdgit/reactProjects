import React, {useState} from "react"; 
import { v4 as uuidv4 } from "uuid";
import "../estilos/TareaFormulario.css";

function TareaFormulario (props) {

    const [input, setInput] = useState("");
    
    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        console.log(tareaNueva, "6:45");
    }
    
    
    return(
        <form 
            className="contenedor-formulario"
            onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type="text"
                placeholder="Nueva tarea"
                name="texto"
                onChange={manejarCambio}
            />

            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    )
}


export default TareaFormulario;