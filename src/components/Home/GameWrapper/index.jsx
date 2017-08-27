import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmptyView from './EmptyView';
import Game from './Game';
import Progress from '../Progress';
import * as schemas from '../../../schemas/react';

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

class GameWrapper extends Component {
  componentDidMount() {
    const { address, onFetch, fetching } = this.props;

    if (address && !fetching) {
      onFetch(address);
    }
  }

  render() {
    const { account, game, creating, onCreate, loading, onClaimWin, address, onPlay } = this.props;

    if (game && game.address) {
      return (
        <div style={styles.container}>
          <Game
            game={game}
            account={account}
            loading={loading}
            onClaimWin={onClaimWin}
            onPlay={onPlay}
          />
        </div>
      );
    }

    if (address) {
      return (
        <div style={styles.container}>
          <Progress />
        </div>
      );
    }

    return (
      <div style={styles.container}>
        <EmptyView creating={creating} onCreate={onCreate} />
      </div>
    );
  }
}

GameWrapper.propTypes = {
  creating: PropTypes.bool,
  loading: PropTypes.bool,
  game: schemas.game,
  account: PropTypes.string,
  onCreate: PropTypes.func,
  onClaimWin: PropTypes.func,
  address: PropTypes.string,
  onFetch: PropTypes.func,
  fetching: PropTypes.bool,
  onPlay: PropTypes.func,
};

GameWrapper.defaultProps = {
  onCreate: () => {},
  creating: false,
  loading: false,
  game: {},
  account: '',
  onClaimWin: () => {},
  address: '',
  onFetch: () => {},
  fetching: false,
  onPlay: () => {},
};

export default GameWrapper;
