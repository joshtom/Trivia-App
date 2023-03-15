import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

/**
 * @param url - The URL to fetch data from
 * @param config - The AxiosRequestConfig object (an object that can be used to configure the request)
 * @typeParam FetchState<T> - The type of data that will be returned
 * @axios Interceptors - It is called before every request which includes the request config object
 */

axios.interceptors.request.use((config) => {
  const updatedConfig = { ...config };
  updatedConfig.baseURL = process.env.REACT_APP_API_URL;
  console.log("The updated config", process.env.REACT_APP_API_URL);
  return updatedConfig;
});

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

const useFetch = <T extends unknown>(
  url: string,
  config?: AxiosRequestConfig
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request<T>({
          url,
          ...config,
        });
        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, config]);

  return { data, loading, error };
};

export default useFetch;
