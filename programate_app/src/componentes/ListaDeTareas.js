import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas () {
   const [tareas, setTareas] = useState([]);
   const agregarTarea = tarea => {
    console.log(tarea);
    if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();

        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
    } else {
        console.log("Escriba algo, toche")
    }
    console.log("Tarea Agregada.");
   }

   const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
   };

   const completadaTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id) {
            tarea.completada = !tarea.completada;
            console.log("Tarea completada.");
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
   }

    return(
        <>
            <TareaFormulario onSubmit = {agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto = {tarea.texto}
                            completada = {tarea.completada}
                            completadaTarea = {completadaTarea}
                            eliminarTarea = {eliminarTarea}
                        />
                    ) 
                }
            </div>
        </>
    );
}


export default ListaDeTareas;