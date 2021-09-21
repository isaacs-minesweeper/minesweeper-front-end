import React from 'react';
import PropTypes from 'prop-types';

const IndividualMine = ({ status }) => (
  <>
    <div className={styles.cell} mine={status}>{status}</div>
  </>
);

IndividualMine.propTypes = {
  status: PropTypes.string.isRequired
};

export default IndividualMine;
