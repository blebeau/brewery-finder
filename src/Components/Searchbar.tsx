import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Dropdown from "react-bootstrap/Dropdown";
import BarList from "./BarList";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("by_city=");

  const data = useFetch(searchType + input);
  return (
    <div style={{ height: "10vh" }}>
      <div
        style={{
          height: "50px",
          paddingBottom: "10px",
        }}
      >
        <input
          style={{
            width: "300px",
            height: "50px",
            borderRadius: "20px",
            marginLeft: "30px",
            backgroundColor: "#79c2d0",
          }}
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "20px",
            marginLeft: "30px",
          }}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value={"by_city="}>City</option>
          <option value={"by_country="}>Country</option>
          <option value={"by_name="}>Name</option>
        </select>
        <button
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "20px",
            marginLeft: "30px",
            marginRight: "3px",
            backgroundColor: "#79c2d0",
          }}
          onClick={() => setSearch(search)}
        >
          Search
        </button>
      </div>
      <BarList bars={data} />
    </div>
  );
};

export default Searchbar;
