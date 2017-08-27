import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import GameContent from './GameContent';
import * as schemas from '../../../../schemas/react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
  h2: {
    color: 'rgba(0,0,0,0.65)',
    fontSize: '110%',
  },
};

const Game = ({ loading, game, account, onClaimWin }) => (
  <div style={styles.container}>
    <div style={styles.titleContainer}>
      <h2 style={styles.h2}>Game: {game.address}</h2>
      {
        loading
          ? <CircularProgress size={25} thickness={2} style={styles.progress} />
          : null
      }
    </div>
    <GameContent game={game} account={account} onClaimWin={onClaimWin} />
  </div>
);

Game.propTypes = {
  loading: PropTypes.bool,
  game: schemas.game,
  account: PropTypes.string,
  onClaimWin: PropTypes.func,
};

Game.defaultProps = {
  loading: false,
  game: {},
  account: '',
  onClaimWin: () => {},
};

export default Game;
