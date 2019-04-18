import React, { useState } from 'react';
import { useBreakEverything } from './hooks/useBreakEverything';

/*
PART 1: useState - basics
-------------------------
- const [value, setter] = useState(initialValue);
- "You love hooks unconditionally"
- inline functions: https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render
- https://reactjs.org/docs/hooks-reference.html#usestate
 */

const Part1 = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  // if (toggle) { useBreakEverything(); }
  return (
    <div>
      <h4>useState: basics</h4>
      {toggle && <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count => count + 1)}>increment</button>
        <button onClick={() => setCount(count => count - 1)}>decrement</button>
      </div>}
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide Counter' : 'Show Counter'}</button>
    </div>
  );
}

export default Part1;