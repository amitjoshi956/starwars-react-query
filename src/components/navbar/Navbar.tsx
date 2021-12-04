import React from "react";

type NavbarProps = {
  setPage: (page: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </nav>
  );
};

export default Navbar;
