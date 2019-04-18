import { useState, useEffect } from 'react';

/*
PART 4: Fetching data
-------------------------
-Fetching data can be done with useEffect, but is supposed to be done by React Supsense (Part 2) that is coming in the future
-IIFE needed for async / await 
*/

export const useFetchData = url => {
  const [value, setValue] = useState({
    data: null,
    isLoading: false,
    isError: false,
  })

  useEffect(() => {
    setValue({ data: null, isLoading: true, isError: false });

    (async () => {
      const result = await fetch(`https://swapi.co/api/${url}`);
      if (result.ok) {
        const json = await result.json();
        setValue({ data: json, isLoading: false, isError: false })
      }else {
        setValue({ data: null, isLoading: false, isError: true })
      }
    })();

  }, [url]);

  return value;
};
