import React from 'react';
import MineArray from '../components/MineArray';
import { useIterator } from '../hooks/useIterator';
import { useMines } from '../hooks/useMines';

const MinesweeperContainer = () => {
  const mines = useMines();
  const iterator = useIterator()[0];
  // if (mines[0])
  //   mines[1](mines[0].mines.split(','));
  if (mines.mines)
    return <MineArray mines={mines.mines} iterator={iterator} />;
  return <></>;
};

export default MinesweeperContainer;
