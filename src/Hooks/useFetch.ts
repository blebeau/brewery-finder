import { useEffect, useState } from "react";
import { barType } from "../Types/barType";

const useFetch = (query: string) => {
  console.log("query", query);

  const [running, setRunning] = useState<boolean>(false);
  const [data, setData] = useState<barType[]>([]);

  const fetchData = async () => {
    fetch(`https://api.openbrewerydb.org/v1/breweries?${query}&per_page=10`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    if (!query) return;

    fetchData();
  }, [query]);
  console.log("data", data);

  return data;
};

export default useFetch;
