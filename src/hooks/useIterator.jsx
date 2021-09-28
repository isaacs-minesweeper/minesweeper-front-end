import { useState } from 'react';

export const useIterator = () => {
  const [i, setIterator] = useState(0);
  
  return [i, setIterator];
};
