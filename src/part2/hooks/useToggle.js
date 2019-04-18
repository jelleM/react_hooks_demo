import { useState, useCallback } from 'react';

export const useToggle = initialState => {
  const [value, setValue] = useState(initialState);
  const inverse = useCallback(() => setValue(value => !value), []);
  return { value, inverse };
};