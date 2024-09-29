import "./App.css";
import Searchbar from "./Components/Searchbar";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("query", data);
        setQuery(data);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
