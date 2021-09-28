import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MineCellStyle.css';
import mine from '../../public/minepic.png';

const IndividualMine = ({ status, adj }) => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = (event) => {
    event.preventDefault();
    if (event.type === 'contextmenu') {
      event.target.textContent = '!';
      event.target.style.color = 'red';
    }
    else if (event.target.value === 'active')
      event.target.style.backgroundColor = 'red';
    else {
      event.target.textContent = adj;
      const colors = ['white', 'green', 'blue', 'red', 'purple', 'yellow', 'orange', 'brown', 'black']
      event.target.style.color = colors[adj];
    }
  };

  return (
    <>
      <button className={styles.cell} style={{ 'backgroundColor': 'gray' }} onClick={handleClick} onContextMenu={handleClick} value={status}></button>
    </>);
};

IndividualMine.propTypes = {
  status: PropTypes.string.isRequired,
  adj: PropTypes.number.isRequired,
};

export default IndividualMine;
