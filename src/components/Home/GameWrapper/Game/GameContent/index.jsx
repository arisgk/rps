import React from 'react';
import PropTypes from 'prop-types';
import YourTurnGame from './YourTurnGame';
import EndedGame from './EndedGame';
import WaitingGame from './WaitingGame';
import * as schemas from '../../../../../schemas/react';

const GameContent = ({ game, account, onClaimWin, onPlay }) => {
  if (game && !game.player1Move) {
    return <YourTurnGame game={game} account={account} onPlay={onPlay} />;
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
  onPlay: PropTypes.func,
};

GameContent.defaultProps = {
  game: {},
  account: '',
  onClaimWin: () => {},
  onPlay: () => {},
};

export default GameContent;
