import React from 'react';
import MineArray from '../components/MineArray';
import { useIterator } from '../hooks/useIterator';
import { useMines } from '../hooks/useMines';

const MinesweeperContainer = () => {
  const mines = useMines();
  console.log(mines);
  const iterator = useIterator()[0];

  return <MineArray mines={mines} iterator={iterator} />;
};

export default MinesweeperContainer;
