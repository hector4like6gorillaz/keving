import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { IForm } from "../../interfaces/session-interface";
import { getLoginLocal } from "../../utilities/session-utilitie";
import { useNavigate } from "react-router-dom";

const nombreVars = ["valor", "contador"];

const valores: IForm = {
  name: "hector",
  last: "balan",
  email: "hwctor@gmail.com",
  age: 34,
  role: "admin",
  isAutenticated: false,
};

const LocalStorageModule = () => {
  const [valor, setvalor] = useState(0);
  const [form, setform] = useState(valores);
  const [autenticated, setautenticated] = useState(false);
  const navegate = useNavigate();

  //localStorage.getItem(“key”);
  const saveInLocalStorage = (varName: string, val: any) =>
    localStorage.setItem(varName, `${val}`);

  const saveJsonInLocalStorage = (varName: string, val: any) =>
    localStorage.setItem(varName, val);

  const LoginSesion = () => {
    setform({ ...form, isAutenticated: !autenticated });
    setautenticated(!autenticated);
  };
  //localStorage.getItem(“key”);
  const saveInSesionStorage = (varName: string, val: number) =>
    sessionStorage.setItem(varName, `${val}`);

  const deleteInLocalStorage = (varName: string) =>
    localStorage.removeItem(varName);

  const deleteAllLocalStorage = () => localStorage.clear();

  const getLocalStorage = (varName: string) => localStorage.getItem(varName);

  useEffect(() => {
    if (parseInt(getLocalStorage(nombreVars[1]) || "-1") !== -1) {
      setvalor(parseInt(getLocalStorage(nombreVars[1]) || "-1"));
    }
  }, []);

  const getJson = () => {
    const name = "form-user";
    if (getLocalStorage(name) !== null) {
      return JSON.parse(getLocalStorage(name) || "");
    }
    return null;
  };

  //console.log(getJson());

  useEffect(() => {
    //console.log(form);

    if (getLoginLocal() !== null) {
      if (!getLoginLocal()!.isAutenticated) {
        navegate("/");
      } else setautenticated(true);
    } else saveJsonInLocalStorage("form-user", JSON.stringify(form));
  }, [form]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        text="guardar en local storage"
        onClick={() => saveInLocalStorage(nombreVars[1], valor)}
      />
      <Button
        text="guardar form en local storage"
        onClick={() =>
          saveJsonInLocalStorage("form-user", JSON.stringify(form))
        }
      />
      <Button
        text="guardar en session storage"
        onClick={() => saveInSesionStorage(nombreVars[1], valor)}
      />
      <Button
        text="borrar variable local"
        onClick={() => deleteInLocalStorage(nombreVars[0])}
      />
      <Button
        text="borrar todo local"
        onClick={() => deleteAllLocalStorage()}
      />
      <Button text="aumentar contador" onClick={() => setvalor(valor + 1)} />
      <Button text="login" onClick={() => LoginSesion()} />
      LocalStorageModule {valor}
      <h3>autenticado? :{autenticated ? "si" : "no"} </h3>
    </div>
  );
};

export default LocalStorageModule;
