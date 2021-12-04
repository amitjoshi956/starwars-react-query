import { useQuery } from "react-query";
import { Planet } from ".";

import "./Planets.css";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);

  const getContent = (status: string) => {
    switch (status) {
      case "loading":
        return <div>Loading data...</div>;

      case "success":
        const items = data.results?.map((planet: any, index: number) => (
          <Planet planet={planet} key={`${planet?.name}-${index}`}>
            {planet?.name}
          </Planet>
        ));
        return <ul>{items}</ul>;

      case "error":
        return <div>Error fetching data!</div>;
    }
  };

  return (
    <div className="Planets-wrapper">
      <h2>Planets</h2>
      {getContent(status)}
    </div>
  );
};

export default Planets;
