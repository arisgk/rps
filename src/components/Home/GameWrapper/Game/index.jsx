import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import GameListItem from './GameListItem';
import Timer from './Timer';
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
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};

const getOpponent = (game, account) => {
  if (game.player1 && game.player2 && game.player1 === account) {
    return game.player2;
  }

  if (game.player1 && game.player2 && game.player2 === account) {
    return game.player1;
  }

  return null;
};

const getMove = (game, account) => {
  if (game.player1 && game.player1 === account) {
    return game.player1Move;
  }

  if (game.player2 && game.player2 === account) {
    return game.player2Move;
  }

  return null;
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
    {
      (game && game.winner)
        ? <ul style={styles.list}>
          <GameListItem title="Opponent" value={getOpponent(game, account)} />
          <GameListItem title="Result" value={`You won the game. You earned ${game.stake} ether!`} />
        </ul>
        : <ul style={styles.list}>
          <GameListItem title="Opponent" value={getOpponent(game, account)} />
          <GameListItem title="Stake" value={game.stake} />
          <GameListItem title="Your Move" value={getMove(game, account)} />
          <Timer lastAction={game.lastAction} gameAddress={game.address} onClaimWin={onClaimWin} />
        </ul>
    }
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
