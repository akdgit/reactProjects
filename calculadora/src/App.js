import './App.css';
import imagenCalculadora from "./imagenes/calculadora.png";
import Boton from "./componentes/Boton.js";
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react'; //importando hooks
import { evaluate } from 'mathjs';

function App() {

  const [ent, setEnt] = useState('');
 
  const agregarEntrada = val => {
    setEnt(ent + val)
  }

  const calcularResultado = () => {
    if (ent) {
      setEnt(evaluate(ent));
    } else {
      alert("Coloque valores vàlidos.");
    }
  }

  return (
    <div className="App">
      <div className='contenedor-imagen-calculadora'>
        <img 
          src= {imagenCalculadora}
          className='imagen-calculadora'
          alt='La imagen muestra la palabra calculadora' />
      </div>
      <div className='contenerdor-calculadora'>
        <Pantalla input={ent}/> 
        <div className='fila'>
          <Boton presionarBoton={agregarEntrada}>1</Boton>
          <Boton presionarBoton={agregarEntrada}>2</Boton>
          <Boton presionarBoton={agregarEntrada}>3</Boton>
          <Boton presionarBoton={agregarEntrada}>+</Boton>
        </div>
        <div className='fila'>
          <Boton presionarBoton={agregarEntrada}>4</Boton>
          <Boton presionarBoton={agregarEntrada}>5</Boton>
          <Boton presionarBoton={agregarEntrada}>6</Boton>
          <Boton presionarBoton={agregarEntrada}>-</Boton>
        </div>
        <div className='fila'>
          <Boton presionarBoton={agregarEntrada}>7</Boton>
          <Boton presionarBoton={agregarEntrada}>8</Boton>
          <Boton presionarBoton={agregarEntrada}>9</Boton>
          <Boton presionarBoton={agregarEntrada}>*</Boton>
        </div>
        <div className='fila'>
          <Boton presionarBoton={agregarEntrada}>0</Boton>
          <Boton presionarBoton={agregarEntrada}>.</Boton>
          <Boton presionarBoton={calcularResultado}>=</Boton>
          <Boton presionarBoton={agregarEntrada}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear limpiarPantalla={()=> setEnt('') }>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
