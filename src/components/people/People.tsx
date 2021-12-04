import { useQuery } from "react-query";
import { Person } from ".";

import "./People.css";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPeople);

  const getContent = (status: string) => {
    switch (status) {
      case "loading":
        return <div>Loading data...</div>;

      case "success":
        const items = data.results?.map((person: any, index: number) => (
          <Person person={person} key={`${person?.name}-${index}`}>
            {person?.name}
          </Person>
        ));
        return <ul>{items}</ul>;

      case "error":
        return <div>Error fetching data!</div>;
    }
  };

  return (
    <div className="People-wrapper">
      <h2>People</h2>
      {getContent(status)}
    </div>
  );
};

export default Planets;
