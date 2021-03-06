import { FC } from "react";

import "./Navbar.css";

type NavbarProps = {
  setPage: (page: string) => void;
};

const Navbar: FC<NavbarProps> = ({ setPage }) => {
  return (
    <nav>
      <button className="Navbar-btn" onClick={() => setPage("planets")}>
        Planets
      </button>
      <button className="Navbar-btn" onClick={() => setPage("people")}>
        People
      </button>
    </nav>
  );
};

export default Navbar;
