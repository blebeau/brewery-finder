import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import BarList from "./BarList";
import "../styles/barStyles.css";

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
          className="input"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="select"
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value={"by_city="}>City</option>
          <option value={"by_country="}>Country</option>
          <option value={"by_name="}>Name</option>
        </select>
        <button onClick={() => setSearch(search)}>Search</button>
      </div>
      {data.length > 0 ? (
        <BarList bars={data} />
      ) : (
        <div data-testid="noResults" className="noResults">
          <p>Closing time! No Bars Found</p>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
