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

const EndedGame = ({ game, account }) => (
  <ul style={styles.list}>
    <GameListItem title="Opponent" value={getOpponent(game, account)} />
    <GameListItem title="Result" value={`You won the game. You earned ${game.stake} ether!`} />
  </ul>
);

EndedGame.propTypes = {
  game: schemas.game,
  account: PropTypes.string,
};

EndedGame.defaultProps = {
  game: {},
  account: '',
};

export default EndedGame;
