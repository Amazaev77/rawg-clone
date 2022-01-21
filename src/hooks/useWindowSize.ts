import { useEffect, useState } from 'react';

interface returnType {
  windowWidth: number;
  windowHeight: number;
}

const useWindowSize = (): returnType => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowWidth: width, windowHeight: height };
};

export default useWindowSize;
