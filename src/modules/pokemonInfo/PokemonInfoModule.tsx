import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { useParams } from "react-router-dom";
import { ResponseAPI, getPokemonById } from "../../services/callets-service";

const PokemonInfoModule = () => {
  const { id } = useParams();

  const [pokemon, setpokemon] = useState<null | ResponseAPI>(null);

  useEffect(() => {
    if (id !== undefined && id !== null) {
      getPokemonById(parseInt(id))
        .then((data) => {
          setpokemon(data);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <div>
      <NavBar />

      {pokemon !== null && (
        <>
          <h1>id: {pokemon.id} </h1>
          <h1>nombre: {pokemon.name} </h1>
        </>
      )}
    </div>
  );
};

export default PokemonInfoModule;
