import React from "react";
import '../hojas-de-estilos/Contador.css'

class Contador extends React.Component {
    render() {
        return(
            <div className="contador">
                {this.props.numClics}
            </div>
        );    
    }
}


{/* 
function Contador ({ numClics }) {
    return(
        <div className="contador">
            {numClics}
        </div>
    );
}
*/}

export default Contador;/*3:52*/