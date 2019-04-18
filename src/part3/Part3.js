import React from 'react';
import { useMeasureWindow } from './hooks/useMeasureWindow';

/*
PART 3: useEffect
-------------------------
 - By using this hook, you tell React that your component needs to do something after render
 - examples of side effects:
    - Data fetching
    - Setting up a subscription
    - Manually changing the DOM in React
    - Attaching an event listener
 - useEffects parts visualised: https://twitter.com/ManuelBieh/status/1106638117816188928?s=20
 */

const Part3 = () => {
  const { width, height } = useMeasureWindow();

  return (
    <div>
      <h4>useEffect: Window Size</h4>
      <p>Width: {width} - Height: {height} </p>
    </div>
  );
}

export default Part3;