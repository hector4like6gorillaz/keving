import { useState } from "react";
import style from "./button.module.css";

const Button = ({
  text = "vacio",
  onClick,
  disabled = false,
  customStyles,
}: {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  customStyles?: string;
}) => {
  //js

  //js
  return (
    <button
      disabled={disabled}
      onClick={() => onClick && onClick()}
      className={`${style["body-button"]} ${customStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
