export const getOpponent = (game, account) => {
  if (game.player1 && game.player2 && game.player1 === account) {
    return game.player2;
  }

  if (game.player1 && game.player2 && game.player2 === account) {
    return game.player1;
  }

  return null;
};

export const getMove = (game, account) => {
  if (game.player1 && game.player1 === account) {
    return game.player1Move;
  }

  if (game.player2 && game.player2 === account) {
    return game.player2Move;
  }

  return null;
};
