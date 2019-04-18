import { useEffect } from 'react';

export const useBreakEverything = () => {
  useEffect(function persistForm() {
    localStorage.setItem('hooks demo', 'Break all the things!');
  });
}