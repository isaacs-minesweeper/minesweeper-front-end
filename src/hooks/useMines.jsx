import { useState, useEffect } from 'react';
import { getMines } from '../services/getMines';

export const useMines = () => {
  let [mines, setMines] = useState([]);

  useEffect(() => {
    mines = getMines()
      .then((mines => setMines(mines)));
  }, []);
  return mines;
};
