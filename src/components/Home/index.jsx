import React from 'react';
import AppBar from 'material-ui/AppBar';
import Game from './Game';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    WebkitFlexDirection: 'column',
    flexDirection: 'column',
  },
  appBarContainer: {
    flex: 'initial',
  },
  appBar: {
    textAlign: 'center',
  },
};

const Home = () => (
  <main style={styles.container}>
    <div>
      <AppBar
        title="RPS"
        showMenuIconButton={false}
        style={styles.appBar}
      />
    </div>

    <Game />
  </main>
);

export default Home;
