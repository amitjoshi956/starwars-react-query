import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { People } from "./components/people";
import { Planets } from "./components/planets";

const App = () => {
  const [page, setPage] = useState<string>("planets");

  return (
    <div className="App">
      <h1 className="App-title">Star Wars</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
};

export default App;
