import './App.css';
import imagenCalculadora from "./imagenes/calculadora.png";
import Boton from "./componentes/Boton.js";
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from './componentes/BotonClear.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-imagen-calculadora'>
        <img 
          src= {imagenCalculadora}
          className='imagen-calculadora'
          alt='La imagen muestra la palabra calculadora' />
      </div>
      <div className='contenerdor-calculadora'>
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
