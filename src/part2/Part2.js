import React from 'react';
import { useToggle } from './hooks/useToggle';
import { useNumber } from './hooks/useNumber';

/*
 Part 2: Hooks - optimizations
 ----------------------
 - Separate logic in a "hooks" folder
 - always use "use..." to define hooks (best practice)
 - useCallback: You can use useCallback to memoize the function so that it only gets called when the inputs to it change.
 - https://reactjs.org/docs/hooks-reference.html#usecallback
 */

const Part2 = () => {
  const counter = useNumber(0);
  const toggle = useToggle(true);
  const toggle2 = useToggle(false);

  return (<div>
    {toggle.value && <div>
      <h4>useState: improvements</h4>
      <p>Count: {counter.value}</p>
      <button onClick={counter.increase}>increment</button>
      <button onClick={counter.decrease}>decrement</button>
    </div>}
    <div>
      {toggle2.value && <h4>Toggle</h4>}
      <button onClick={toggle.inverse}>{toggle.value ? 'Hide Counter' : 'Show Counter'}</button>
      <button onClick={toggle2.inverse}>{toggle2.value ? 'Hide Counter 2' : 'Show Counter 2'}</button>

    </div>
  </div>)
};

export default Part2;