
import React, { useState } from "react";
import "./fecha.css";

function Fecha() {
  const [fecha, setFecha] = useState('');
  const [mostrarInput, setMostrarInput] = useState(true);

  const handleHoraChange = (e) => {
    setFecha(e.target.value);
  };

  const handleMostrarInput = () => {
    setMostrarInput(false);
  };

  return (
    <div>
      
      {mostrarInput ? (
        <input
          type="text"
          placeholder="dd/mm/yyyy"
          value={fecha}
          onChange={handleHoraChange}
        />
      ) : (
        <p className="fechita">Fecha: {fecha}</p>
      )}
      {mostrarInput && fecha !== '' && (
        <button onClick={handleMostrarInput}>Aceptar</button>
      )}
    </div>
  );
}


export default Fecha;
