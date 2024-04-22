import React from 'react';
import '../hojas-de-estilos/Boton.css';

class Boton extends React.Component {
    render() {
        return (
            <button 
            className= {this.props.esBotonclic ? "boton-clic" : "boton-reiniciar"} 
            onClick={this.props.manejarClic} >
                {this.props.texto}
            </button>
        );
    }
}

{/* 7:45:50
function Boton({texto, esBotonclic, manejarClic}){ //sintaxis desestructuracion props
    return (
        <button 
        className= {esBotonclic ? "boton-clic" : "boton-reiniciar"} 
        onClick={manejarClic} >
            {texto}
        </button>
    );
}
*/}

export default Boton;