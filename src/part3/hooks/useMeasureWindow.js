import { useEffect, useState } from 'react';

export const useMeasureWindow = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // mount / update
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return (() => {
      // unmount - Clean up
      window.removeEventListener('resize', handleResize);
    })
  }, [width, height]);

  return { width, height };
};