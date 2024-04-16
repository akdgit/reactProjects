import './App.css';
import paginaLogo from "./imagenes/programat-logo3.jpg";
//import Tarea from "./componentes/Tarea"; Se colocaba {Tarea texto="tarea"}
//import TareaFormulario from './componentes/TareaFormulario'; Se colocaba <TareaFormulario/>
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className="contenedor-logo">
        <img 
          src={paginaLogo}
          className="imagen-logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App; 
