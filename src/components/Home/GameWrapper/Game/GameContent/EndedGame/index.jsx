import React from 'react';
import PropTypes from 'prop-types';
import GameListItem from '../GameListItem';
import * as schemas from '../../../../../../schemas/react';
import { getOpponent } from '../../../../../../utils/games';

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};

const EndedGame = ({ game, account }) => {
  const opponent = getOpponent(game, account);
  if (account && (game.winner === account.toLowerCase())) {
    return (
      <ul style={styles.list}>
        <GameListItem title="Opponent" value={opponent} />
        <GameListItem title="Result" value={`You won the game. You earned ${game.stake} ether!`} />
      </ul>
    );
  }

  if (opponent && (game.winner === opponent.toLowerCase())) {
    return (
      <ul style={styles.list}>
        <GameListItem title="Opponent" value={opponent} />
        <GameListItem title="Result" value={`You lost the game. You lost ${game.stake} ether.`} />
      </ul>
    );
  }

  return (
    <ul style={styles.list}>
      <GameListItem title="Opponent" value={opponent} />
      <GameListItem title="Result" value="The game ended with a tie" />
    </ul>
  );
};

EndedGame.propTypes = {
  game: schemas.game,
  account: PropTypes.string,
};

EndedGame.defaultProps = {
  game: {},
  account: '',
};

export default EndedGame;
