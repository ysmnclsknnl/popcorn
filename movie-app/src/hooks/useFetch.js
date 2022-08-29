import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (er) {
      console.log(er.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { loading, error, data };
};
