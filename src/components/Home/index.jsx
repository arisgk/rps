import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Progress from './Progress';
import GameRoutes from '../Routes/Games';

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

class Home extends Component {
  componentDidMount() {
    const { location, history, gameAddress, fetchingGame, loadGame } = this.props;

    if (location.pathname === '/') return history.push('/games/new');
  }

  render() {
    const { web3Ready, account, gameAddress, fetchingGame } = this.props;

    return (
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
            ? <GameRoutes />
            : <Progress />
        }
      </main>
    );
  }
}

Home.propTypes = {
  web3Ready: PropTypes.bool,
  account: PropTypes.string,
  gameAddress: PropTypes.string,
  fetchingGame: PropTypes.bool,
  loadGame: PropTypes.func,
};

Home.defaultProps = {
  web3Ready: false,
  account: '',
  gameAddress: '',
  fetchingGame: false,
  loadGame: () => {},
};

export default Home;
