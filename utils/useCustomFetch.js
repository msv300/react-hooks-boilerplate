// This is Expiremental. We could also use react-hooks-fetch
// until Suspense comes up with its own data fetching feature.
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// For network clean up using "AbortController" refer following link
// https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a

const useFetch = (initialUrl, actions = {}) => {
  const [data, setData] = useState();
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (actions.onStart) dispatch(actions.onStart());
      setError(false);
      setLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        if (actions.onSuccess) dispatch(actions.onSuccess(result.data));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return [{ data, loading, error }, setUrl];
};

export default useFetch;