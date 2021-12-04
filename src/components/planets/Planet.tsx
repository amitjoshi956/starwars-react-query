import { FC } from "react";

import "./Planet.css";

type PlanetProps = {
  planet: {
    name: string;
    population: string;
    terrain: string;
  };
};

const Planet: FC<PlanetProps> = ({ planet }) => {
  return (
    <div className="Planet-card">
      <h3>{planet.name}</h3>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
};

export default Planet;
