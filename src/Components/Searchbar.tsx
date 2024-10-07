import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Dropdown from "react-bootstrap/Dropdown";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("city");

  const { running, data } = useFetch(searchType + input);

  return (
    <div style={{ height: "10vh", width: "50vw" }}>
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <select onChange={(e) => setSearchType(e.target.value)}>
          <option value={"by_city"}>City</option>
          <option value={"by_country"}>Country</option>
          <option value={"by_name"}>Name</option>
        </select>
        <button
          style={{ marginLeft: "3px", marginRight: "3px" }}
          onClick={() => setSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
