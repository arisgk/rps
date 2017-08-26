import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
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

const Game = ({ onCreate }) => (
  <div style={styles.container}>
    <EmptyView onCreate={onCreate} />
  </div>
);

export default Game;
