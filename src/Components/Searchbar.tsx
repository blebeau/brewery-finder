import { useEffect, useState } from "react";
// import useFetch from "../Hooks/useFetch";
import BarList from "./BarList";
import "../styles/barStyles.css";
import { barType } from "../Types/barType";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("by_name=");
  const [buttonClick, setButtonClick] = useState("");
  const [data, setData] = useState<barType[]>([]);
  const [skip, setSkip] = useState<boolean>(true);

  const handleClick = () => {
    setButtonClick(input);
  };

  useEffect(() => {
    if (skip) setSkip(false);
    else
      fetch(
        `https://api.openbrewerydb.org/v1/breweries?${
          searchType + input
        }&per_page=10`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
  }, [buttonClick]);

  return (
    <div style={{ height: "10vh" }}>
      <div
        style={{
          height: "50px",
          paddingBottom: "10px",
          display: "inline-flex",
          paddingTop: "5px",
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
        <button className="search_button" type="submit" onClick={handleClick}>
          Search
        </button>
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
