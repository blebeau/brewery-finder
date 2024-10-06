import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Dropdown from "react-bootstrap/Dropdown";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const { running, data } = useFetch(input);

  console.log("data", data);

  return (
    <div>
      <input placeholder="Search" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setSearch(search)}>Search</button>
    </div>
  );
};

export default Searchbar;
