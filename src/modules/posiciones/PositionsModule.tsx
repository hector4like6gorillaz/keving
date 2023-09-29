import React, { useState } from "react";
import style from "./pos.module.css";
const PositionsModule = () => {
  const [efecto, setEfecto] = useState(false);

  return (
    <div className={`${style["padre"]}`}>
      <div
        className={`${style["hijo1"]}
        ${
          !efecto ? style["animacionHijo1-mov1"] : style["animacionHijo1-mov2"]
        }`}
        onClick={() => setEfecto(!efecto)}
      ></div>
      <div
        className={`${style["hijo2"]}
      ${!efecto ? style["animacionHijo2-mov1"] : style["animacionHijo2-mov2"]}`}
      ></div>
      <div
        className={`${style["hijo3"]}
      ${!efecto ? style["animacionHijo3-mov1"] : style["animacionHijo3-mov2"]}`}
      ></div>
      <div className ={`${style['hidden-atras']}`}></div>
    </div>
  );
};

export default PositionsModule;
