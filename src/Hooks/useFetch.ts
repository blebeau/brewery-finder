import { useEffect, useState } from "react";

const useFetch = (query: string) => {
  const [running, setRunning] = useState<boolean>(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      fetch(`https://api.openbrewerydb.org/v1/breweries/${query}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    };

    fetchData();
  }, [query]);

  return { running, data };
};
