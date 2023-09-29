import LandingModule from "../modules/landing/LandingModule";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonInfoModule from "../modules/pokemonInfo/PokemonInfoModule";
import LocalStorageModule from "../modules/localStorage/LocalStorageModule";
import PositionsModule from "../modules/posiciones/PositionsModule";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingModule />} />
        <Route path="/pokemon-info/:id" element={<PokemonInfoModule />} />
        <Route path="/local-storage" element={<LocalStorageModule />} />
        <Route path="/positions" element={<PositionsModule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
