import { useEffect, useState } from 'react';
import RestApi from '../services/api';

function useFetch(url, config) {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (fetchUrl, fetchConfig = {}) => {
    try {
      setLoading(true);
      const { data } = await RestApi.get(fetchUrl, fetchConfig);
      setResponse(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData(url, config);
    }
  }, [url]);

  return [response, error, loading, fetchData];
}

export default useFetch;
