import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";

const nombreVars = ["valor", "contador"];

const valores = {
  name: "hector",
  last: "balan",
  email: "hwctor@gmail.com",
  age: 34,
  role: "admin",
};

const LocalStorageModule = () => {
  const [valor, setvalor] = useState(0);
  const [form, setform] = useState(valores);

  //localStorage.getItem(“key”);
  const saveInLocalStorage = (varName: string, val: any) =>
    localStorage.setItem(varName, `${val}`);

  const saveJsonInLocalStorage = (varName: string, val: any) =>
    localStorage.setItem(varName, val);
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

  console.log(getJson());

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
      LocalStorageModule {valor}
    </div>
  );
};

export default LocalStorageModule;
