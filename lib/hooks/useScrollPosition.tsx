import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [topDistance, setTopDistance] = useState(0);

  const setTopDistanceEvent = () => {
    setTopDistance(window.pageYOffset);
  };

  useEffect(() => {
    document.addEventListener('scroll', setTopDistanceEvent);
    return () => {
      document.removeEventListener('scroll', setTopDistanceEvent);
    };
  }, []);

  return topDistance;
}
