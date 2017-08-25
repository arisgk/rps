import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  container: {
    flex: 'auto',
    display: 'flex',
    WebkitAlignItems: 'center',
    alignItems: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
};

const Progress = () => (
  <div style={styles.container}>
    <CircularProgress />
  </div>
);

export default Progress;
