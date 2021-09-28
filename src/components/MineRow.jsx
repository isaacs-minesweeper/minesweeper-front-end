import React from 'react';
import PropTypes from 'prop-types';
import IndividualMine from './IndivMine';

export const MineRow = ({ row }) => {
  let col = 0;
  return (
    <p style={{ 'marginBottom': '-17px' }}>
      {row.map((cell) => {
        col = col + 1;
        return <IndividualMine status={cell[0] === '1' ? 'active' : 'clear'} adj={cell[1]} key={col}/>
      })}
    </p>
  );
};

MineRow.propTypes = {
  row: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};


