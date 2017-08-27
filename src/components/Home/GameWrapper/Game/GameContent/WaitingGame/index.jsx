import React from 'react';
import PropTypes from 'prop-types';
import GameListItem from '../GameListItem';
import Timer from '../Timer';
import * as schemas from '../../../../../../schemas/react';
import { getOpponent, getMove } from '../../../../../../utils/games';

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};

const WaitingGame = ({ game, account, onClaimWin }) => (
  <ul style={styles.list}>
    <GameListItem title="Opponent" value={getOpponent(game, account)} />
    <GameListItem title="Stake" value={game.stake} />
    <GameListItem title="Your Move" value={getMove(game, account)} />
    <Timer lastAction={game.lastAction} game={game} onClaimWin={onClaimWin} />
  </ul>
);

WaitingGame.propTypes = {
  game: schemas.game,
  account: PropTypes.string,
  onClaimWin: PropTypes.func,
};

WaitingGame.defaultProps = {
  game: {},
  account: '',
  onClaimWin: () => {},
};

export default WaitingGame;
