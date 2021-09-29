import { useState, useEffect } from 'react';
import { getMineById, getMines, getMinesWithGET } from '../services/getMines';

export const useMines = () => {
  let [mines, setMines] = useState([]);

  useEffect(() => {
    mines = getMines()
      .then((mines => setMines(mines)));
  }, []);
  return mines;
};
export const useMinesWithGET = () => {
  let [allMines, setAllMines] = useState([]);

  useEffect(() => {
    allMines = getMinesWithGET()
      .then((mines => setAllMines(mines)));
  }, []);
  return allMines;
};
export const useMineById = (id) => {
  let [mineNum, setMineById] = useState([]);

  useEffect(() => {
    if (id) {
      mineNum = getMineById(Number(id))
        .then((mines => setMineById(mines)));
    }
  }, [id]);
  return mineNum;
};
