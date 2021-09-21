import React from 'react';
import PropTypes from 'prop-types';
import IndividualMine from './IndivMine';

const MineArray = ({ mines, iterator }) => (
  <>
    {mines.map((mineRow) => (
      mineRow.map((cell) => (
        <IndividualMine status={cell === 1 ? 'active' : 'clear'} key={Math.floor((iterator++) / 16)}/>
      ))
    ))}
  </>
);

export default MineArray;

MineArray.propTypes = {
  mines: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  iterator: PropTypes.func.isRequired
};
