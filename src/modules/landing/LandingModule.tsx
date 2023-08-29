import React, { useState } from "react";
import style from "./landing.module.css";
import Button from "../../components/button/Button";

let menu = [
  "inicio",
  "menu",
  "pokemon",
  "contacto",
  "ejemplos",
  "fechas",
  "cuadernos",
];

const LandingModule = () => {
  const [count, setcount] = useState(0);
  const [menuLabel, setmenuLabel] = useState(0);

  const aumentar = () => {
    setcount(count + 1);
  };
  const setLabels = () => {
    let max = menu.length - 1;
    if (menuLabel < max) setmenuLabel(menuLabel + 1);
    else setmenuLabel(0);
  };

  console.log(menuLabel, menu.length);
  return (
    <div className={`${style["container-2"]}`}>
      {/* <NavBar />*/}
      {/*
       <div className={`${style["grilla-responsive"]}`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16].map(
          (item: number, index: number) => {
            return (
              <div key={index} className={`${style["div-1"]}`}>
                <p className ={`${style['p-ejemplo']}`}>{item} </p>
              </div>
            );
          }
        )}
      </div>
              */}
      <div className={`${style["navbar"]}`}>
        <img
          style={{ marginLeft: 32, height: 50, border: "1px solid" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
        />

        {menu.map((item: string) => {
          return (
            <p
              style={{ marginRight: 32 }}
              key={item}
              className={`${style["p-p"]}`}
            >
              {item}{" "}
            </p>
          );
        })}
      </div>
      <div className={`${style["content"]}`}>
        <Button text="cambiar label" onClick={setLabels} />
        <Button text="contador" onClick={aumentar} />
        <h1>valor: {count}</h1>
        <h1>etiqueta: {menu[menuLabel]}</h1>
      </div>
      <div className={`${style["footer"]}`}></div>
      <div className={`${style["left-menu"]}`}></div>
    </div>
  );
};

export default LandingModule;
