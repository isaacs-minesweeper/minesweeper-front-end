import React from 'react';
import MineArray from '../components/MineArray';
import { useIterator } from '../hooks/useIterator';
import { useMines, useMinesWithGET, useMineById } from '../hooks/useMines';
import { getMineById, getMines, getMinesWithGET } from '../services/getMines';

const MinesweeperContainer = () => {
  const mines = useMines();
  const allMines = useMinesWithGET();
  let currentMines = 0;
  if (mines){
    currentMines = useMineById(mines.id);
  }
  const iterator = useIterator()[0];
  // if (mines[0])
  //   mines[1](mines[0].mines.split(','));
  if (mines.mines)
    return <MineArray mines={mines.mines} iterator={iterator} num={currentMines} total={allMines} />;
  return <></>;
};

export default MinesweeperContainer;
