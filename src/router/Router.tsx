import LandingModule from "../modules/landing/LandingModule";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonInfoModule from "../modules/pokemonInfo/PokemonInfoModule";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingModule />} />
        <Route path="/pokemon-info/:id" element={<PokemonInfoModule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
