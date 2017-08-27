import React from 'react';
import PropTypes from 'prop-types';
import YourTurnGame from './YourTurnGame';
import EndedGame from './EndedGame';
import WaitingGame from './WaitingGame';
import * as schemas from '../../../../../schemas/react';

const GameContent = ({ game, account, onClaimWin }) => {
  if (game && !game.move) {
    return <YourTurnGame game={game} account={account} />;
  }

  if (game && game.winner) {
    return <EndedGame game={game} account={account} />;
  }

  return <WaitingGame game={game} account={account} onClaimWin={onClaimWin} />;
};

GameContent.propTypes = {
  game: schemas.game,
  account: PropTypes.string,
  onClaimWin: PropTypes.func,
};

GameContent.defaultProps = {
  game: {},
  account: '',
  onClaimWin: () => {},
};

export default GameContent;
