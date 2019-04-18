import { useState } from 'react';

export const useInput = (initialValue, type = 'text') => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange, type }
};