import './App.css';
import React from 'react';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/freecodecamp_logo.png';
{/*import { useState } from 'react'; */}


class App extends React.Component {
  constructor() {    {/*Se define cuando se va a pasar un estado o cuando se van a realizar operaciones especificas para pasarlas a otros mètodos. */}
    super();    {/*Permite realizar herencias */}
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src= {freeCodeCampLogo}
            alt='Logo de freecodecamp' />
        </div>
        <div className='contenedor-contador'>
          <Contador numClics={this.state.numClics} />
          <Boton
            texto={'Clic'}
            esBotonclic={true}
            manejarClic={this.manejarClic} />
          <Boton
            texto={'Reiniciar'}
            esBotonclic={false}
            manejarClic={this.reiniciarContador} /> 
        </div>
      </div>
    );
  }
}


{/* 
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics +1);
    console.log('clic');
  }

  const reiniciarContador = () => {
    setNumClics(0);
    console.log('reinicio');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src= {freeCodeCampLogo}
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        <Boton
          texto={'Clic'}
          esBotonclic={true}
          manejarClic={manejarClic} />
        <Boton
          texto={'Reiniciar'}
          esBotonclic={false}
          manejarClic={reiniciarContador} /> 
      </div>
    </div>
  );
}
*/}

export default App;
