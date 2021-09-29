import React from 'react';
import PropTypes from 'prop-types';
import { MineRow } from './MineRow';
import { calculateAdjacent } from '../services/calculateAdjacency';

const MineArray = ({ mines, iterator, num, total }) => {
  const newRows = mines.split(',');
  const newArray = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
  const adjacencyArray = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
  let mineIndex = 0;
  let i = 0;
  let j = 0;
  while(i < 16) {
    j = 0;
    while(j < 30) {
      newArray[i][j] = [newRows[mineIndex], calculateAdjacent(newRows, mineIndex)];
      mineIndex++;
      j++;
    }
    i++;
  }
  let row = 0;
  return (
    <>
      <p style={{ backgroundColor: 'gray', width: '39.1rem', height: '49%' }}>
        {newArray.map((mineRow) => {
          return <MineRow row={mineRow} key={row++}/>;
        })}
      </p>
      <div>Total mines: {num}</div>
      <div>Mines on every board on the server: {total}</div>
    </>
  );
};

export default MineArray;

MineArray.propTypes = {
  mines: PropTypes.string.isRequired,
  iterator: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
