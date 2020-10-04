import { useState, useEffect } from "react";

const useFetch = (url, category) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false
  });


  const fetchImages = async (url) => {

    const resp = await fetch(url);
    const data = await resp.json();

    return data.hits;
  };

  useEffect(() => {
    if (category.trim().length > 0) {
      setState({ data: null, loading: true, error: false });
      fetchImages(url).then((images) => {
        setState({ data: images, loading: false, error: false });
      })
        .catch((err) => {
          setState({ ...state, error: true });
        });
    }
  }, [category, url]);


  return state;
};

export default useFetch;
