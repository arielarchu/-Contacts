import React, { useState } from 'react';
import "./hora.css";

function Hora() {
  const [hora, setHora] = useState('');
  const [mostrarInput, setMostrarInput] = useState(true);

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  const handleMostrarInput = () => {
    setMostrarInput(false);
  };

  return (
    <div>
      
      {mostrarInput ? (
        <input
          type="text"
          placeholder="hh:mm:ss"
          value={hora}
          onChange={handleHoraChange}
        />
      ) : (
        <p className='horita'>Hora: {hora}</p>
      )}
      {mostrarInput && hora !== '' && (
        <button onClick={handleMostrarInput}>Aceptar</button>
      )}
    </div>
  );
}




export default Hora;
