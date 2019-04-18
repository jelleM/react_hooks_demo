import { useState, useCallback } from 'react';

export const useNumber = (initialState, { step = 1, upperLimit = 100, lowerLimit = 0 } = {}) => {
  const [value, setValue] = useState(initialState);

  const increase = useCallback(() => {
    setValue(value => {
      const nextValue = value + step;
      if (nextValue <= upperLimit && nextValue >= lowerLimit) {
        return nextValue;
      }
      return value;
    });
  }, []);

  const decrease = useCallback(() => {
    setValue(value => {
      const nextValue = value - step;
      if (nextValue <= upperLimit && nextValue >= lowerLimit) {
        return nextValue;
      }
      return value;
    });
  }, []);

  return { value, setValue, increase, decrease };
};