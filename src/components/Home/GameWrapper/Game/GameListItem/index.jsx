import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    paddingTop: 12,
    paddingBottom: 12,
    color: 'rgba(0,0,0,0.54)',
  },
  value: {
    marginLeft: 4,
  },
};

const GameListItem = ({ title, value }) => (
  <li style={styles.container}>
    <span>{title}:</span>
    <span style={styles.value}>{value}</span>
  </li>
);

GameListItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

GameListItem.defaultProps = {
  title: '',
  value: '',
};

export default GameListItem;
