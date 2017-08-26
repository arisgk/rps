import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import GameContainer from '../../containers/Home/GameContainer';
import Progress from './Progress';

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
  account: {
    margin: 0,
    display: 'flex',
    WebkitAlignItems: 'center',
    alignItems: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
};

const Home = ({ web3Ready, account }) => (
  <main style={styles.container}>
    <div>
      <AppBar
        title="RPS"
        showMenuIconButton={false}
        iconElementRight={<div>
          Account: {account}
        </div>}
        iconStyleRight={styles.account}
      />
    </div>
    {
      web3Ready
        ? <GameContainer />
        : <Progress />
    }

  </main>
);

Home.propTypes = {
  web3Ready: PropTypes.bool,
  account: PropTypes.string,
};

Home.defaultProps = {
  web3Ready: false,
  account: '',
};

export default Home;
