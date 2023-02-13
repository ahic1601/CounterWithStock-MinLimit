import React from 'react';
import { useState, useEffect } from 'react';

const Contador = ({ stockDisponible }) => {
  const [numero, setNumero] = useState(0);
  const contadorMin = 0;
  const sumar = () => {
    setNumero(numero + 1);
    numero >= stockDisponible ?
    setNumero(stockDisponible): sumar
  };
  const reset = () => {
    setNumero(0);
  };
  const restar = () => {
    setNumero(numero - 1);
    numero <= contadorMin ? 
    setNumero(contadorMin) : setNumero(numero - 1);
  };

  return (
    <div>
      <p>{numero}</p>
      <button id="btn_sumar" onClick={sumar}>
        +
      </button>
      <button id="btn_reset" onClick={reset}>
        Reset
      </button>
      <button id="btn_restar" onClick={restar}>
        -
      </button>
    </div>
  );
};

export default Contador;