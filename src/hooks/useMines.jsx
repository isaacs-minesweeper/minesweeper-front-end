import { useState, useEffect } from 'react';
import { getMines } from '../services/getMines';

export const useMines = () => {
  const [mines, setMines] = useState([]);

  useEffect(() => {
    console.log('hi!');
    getMines()
      .then((mines => console.log(mines)));
  }, []);
  console.log(mines);
  return mines;
};
