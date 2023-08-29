import React from "react";
import style from "./navbar.module.css";
import Button from "../button/Button";

const NavBar = () => {
  return (
    <div className={`${style["navbar"]}`}>
      <img
        className={`${style["img-logo"]}`}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
      />
      <p className={`${style["p-nav"]}`}>home</p>
      <p className={`${style["p-nav"]}`}>usuarios</p>
      <p className={`${style["p-nav"]}`}>contenidos</p>
      <p className={`${style["p-nav"]}`}>ejemplos</p>
      <Button text="login" customStyles={style["button-size"]} />
    </div>
  );
};

export default NavBar;
