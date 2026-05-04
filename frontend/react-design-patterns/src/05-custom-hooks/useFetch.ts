import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = async (url) => {
    setData((prev) => ({
      ...prev,
      loading: true,
    }));

    try {
      const promisedData = await fetch(url);
      const resp = await promisedData.json();

      setData((prev) => ({
        ...prev,
        data: resp.products,
      }));
    } catch (error) {
      setData((prev) => ({
        ...prev,
        error,
      }));
    } finally {
      setData((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return {
    ...data,
  };
};
