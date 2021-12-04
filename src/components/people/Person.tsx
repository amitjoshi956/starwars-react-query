import { FC } from "react";

import "./Person.css";

type PersonProps = {
  person: {
    name: string;
    gender: string;
    birth_year: string;
  };
};

const Person: FC<PersonProps> = ({ person }) => {
  return (
    <div className="Person-card">
      <h3>{person.name}</h3>
      <p>Gender: {person.gender}</p>
      <p>Birth Year: {person.birth_year}</p>
    </div>
  );
};

export default Person;
