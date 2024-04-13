import './App.css';
import paginaLogo from "./imagenes/programat-logo3.jpg";
import Tarea from "./componentes/Tarea";

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
        <Tarea texto = "Ver Las Grandes Ligas 5:55." />
      </div>
    </div>
  );
}

export default App; 
