import React, { useEffect, useState, Fragment } from "react";
import style from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import {
  ResponseAPI,
  getPokemonById,
  getPosts,
} from "../../services/callets-service";
import NavBar from "../../components/navbar/NavBar";
import {
  upperAllFirst,
  upperAllWords,
  upperFirtCharacter,
} from "../../utilities/words-utilities";

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
  const [sumatoria, setsumatoria] = useState(0);
  const [pokemon, setpokemon] = useState<null | ResponseAPI>(null);
  const [pokemonFijo, setpokemonFijo] = useState<null | ResponseAPI>(null);

  const navigate = useNavigate();

  const aumentar = () => {
    setcount(count + 1);
  };

  const suma = (num: number) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum = sum + i;
    }
    return sum;
  };

  const setLabels = () => {
    let max = menu.length - 1;
    if (menuLabel < max) setmenuLabel(menuLabel + 1);
    else setmenuLabel(0);
  };

  useEffect(() => {
    getPokemonById(150)
      .then((data) => {
        setpokemonFijo(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (count > 0)
      getPokemonById(count)
        .then((data) => {
          setpokemon(data);
        })
        .catch((e) => console.log(e));
    /*
    getPosts()
      .then((data) => setpokemon(data))
      .catch((e) => console.log(e))
      .finally(() => {});
  */
  }, [count]);

  const ejecutar = () => setsumatoria(suma(count));

  useEffect(() => {
    ejecutar();

    return () => {
      ejecutar();
    };
  }, [count]);

  let name = "hector";
  let oracion = "anita lava la tina los jueves y sabados";

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

        <h1> {oracion}</h1>
        <h1> {upperAllFirst(oracion)} </h1>
        <h1>forma 1: {upperAllWords(name)}</h1>
        <h1>forma 1: {upperFirtCharacter(name)} </h1>
        <h1>valor: {count}</h1>
        <h1>etiqueta: {menu[menuLabel]}</h1>
        <h1>sumatoria de valor: {sumatoria}</h1>
        <div style={{ border: "2px solid" }}>
          {pokemonFijo !== null && (
            <>
              <h1>{pokemonFijo.name} </h1>
              <img src={pokemonFijo.sprites.front_default} />
            </>
          )}
        </div>
        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Fragment key={item}>
                {pokemon !== null && (
                  <div
                    style={{
                      border: "2px solid",
                      width: 200,
                      cursor: "pointer",
                    }}
                    onClick={()=>navigate(`/pokemon-info/${pokemon.id}`)}
                  >
                    <h1>{pokemon.name} </h1>
                    <img src={pokemon.sprites.front_default} />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className={`${style["footer"]}`}></div>
      <div className={`${style["left-menu"]}`}></div>
    </div>
  );
};

export default LandingModule;
