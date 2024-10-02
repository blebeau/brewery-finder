import { useEffect, useState } from "react";

const useFetch = (query: string) => {
  const [running, setRunning] = useState<boolean>(false);
  const [data, setData] = useState();

  const fetchData = async () => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    if (!query) return;

    fetchData();
  }, [query]);

  return { running, data };
};

export default useFetch;
