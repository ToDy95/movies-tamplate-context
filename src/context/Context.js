import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../utils/utils';

const GlobalProvider = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [actors, setActors] = useState()
  useEffect(() => {
    (async () => {
      await fetchData('titles/utils/titleTypes').then(res => setCategories(res))
      await fetchData('titles').then(res => setData(res))
      await fetchData('actors').then(res => setActors(res))
    })()
    // url: 'https://moviesdatabase.p.rapidapi.com/titles/search/keyword/dune',
    // https://rapidapi.com/SAdrian/api/moviesdatabase/
    // https://www.themoviedb.org/
    //https://www.imdb.com/?ref_=nv_home
  }, [])

  return (
    <GlobalProvider.Provider value={{ appData: [data, setData] }}>
      {children}
    </GlobalProvider.Provider>
  );
};

export default Context;
