import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";

const nombreVars = ["valor", "contador"];

const LocalStorageModule = () => {
  const [valor, setvalor] = useState(0);

  //localStorage.getItem(“key”);
  const saveInLocalStorage = (varName: string, val: number) =>
    localStorage.setItem(varName, `${val}`);
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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        text="guardar en local storage"
        onClick={() => saveInLocalStorage(nombreVars[1], valor)}
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
