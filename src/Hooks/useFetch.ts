import { useEffect, useState } from "react";

const useFetch = (query: string) => {
  console.log("query", query);

  const [running, setRunning] = useState<boolean>(false);
  const [data, setData] = useState();

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

  return { running, data };
};

export default useFetch;
