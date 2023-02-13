import React from 'react';
import { useState, useEffect } from 'react';

const Contador = ({ stockDisponible }) => {
  const [numero, setNumero] = useState(0);
  const contadorMin = 0;
  const [sumarIcon,setSumarIcon] = useState("+");
  const [restarIcon,setRestarIcon] = useState("-");
  const sumar = () => {
    setNumero(numero + 1);
    if (numero < stockDisponible) {
      sumar;
      setRestarIcon("-")
    }else {
      setNumero (stockDisponible);
      setSumarIcon ("Max");
    }
  };

  const reset = () => {
    setNumero(0);
    setSumarIcon("+")
    setRestarIcon("-")
  };

  const restar = () => {
    setNumero(numero - 1);
    if (numero <= contadorMin){
      setNumero(contadorMin);
      setRestarIcon("Min")
      }else{
      setNumero(numero - 1);
      setSumarIcon("+")
      setRestarIcon("-")
    }
  };

  return (
    <div>
      <p>{numero}</p>
      <button id="btn_sumar" onClick={sumar}>
        {sumarIcon}
      </button>
      <button id="btn_reset" onClick={reset}>
        Reset
      </button>
      <button id="btn_restar" onClick={restar}>
        {restarIcon}
      </button>
    </div>
  );
};

export default Contador;
