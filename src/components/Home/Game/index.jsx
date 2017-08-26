import React from 'react';
import PropTypes from 'prop-types';
import EmptyView from './EmptyView';

const styles = {
  container: {
    flex: 'auto',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    WebkitAlignItems: 'center',
    alignItems: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
};

const Game = ({ game, onCreate }) => (
  <div style={styles.container}>
    <EmptyView onCreate={onCreate} />
  </div>
);

Game.propTypes = {
  onCreate: PropTypes.func,
};

Game.defaultProps = {
  onCreate: () => {},
};

export default Game;
