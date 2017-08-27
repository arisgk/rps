import PropTypes from 'prop-types';

export const game = PropTypes.shape({
  address: PropTypes.string,
  player1: PropTypes.string,
  player2: PropTypes.string,
  player1Move: PropTypes.string,
  player2Move: PropTypes.string,
  winner: PropTypes.string,
  stake: PropTypes.number,
  lastAction: PropTypes.date,
});
