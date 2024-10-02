import { useState } from "react";
import useFetch from "../Hooks/useFetch";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");

  const { running, data } = useFetch(input);

  console.log("data", data);

  return (
    <div>
      <input placeholder="Search" onChange={(e) => setInput(e.target.value)} />
      <button>Search</button>
    </div>
  );
};

export default Searchbar;
