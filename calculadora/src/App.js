import './App.css';
import imagenCalculadora from "./imagenes/calculadora.png";
import Boton from "./componentes/Boton.js";

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
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
