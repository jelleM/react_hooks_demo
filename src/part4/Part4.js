import React from 'react';
import { useFetchData } from './hooks/useFetchData';
import { useInput } from './hooks/useInput';
/*
PART 4: Fetching data
-------------------------
-Fetching data can be done with useEffect, but is supposed to be done by React Supsense (Part 2) that is coming in the future
-IIFE needed for async / await 
*/

const Part4 = () => {
  const searchInput = useInput('people');
  const { isLoading, isError, data } = useFetchData(searchInput.value);

  return (
    <div>
      <h4>useEffect: Network call</h4>
      <div>
        <input {...searchInput} />
        {isLoading && <p>...loading</p>}
        {isError && <p>These are not the droids you are looking for!</p>}
        {data && data.results && (
          <div>
            {data.results.map(result => <p key={result.name}>{result.name}</p>)}
          </div>
        )}
      </div>
    </div>
  )
};

export default Part4;