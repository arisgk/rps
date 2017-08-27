import React from 'react';
import PropTypes from 'prop-types';
import EmptyView from './EmptyView';
import Game from './Game';
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

const GameWrapper = ({ loading, creating, game, account, onCreate, onClaimWin }) => (
  <div style={styles.container}>
    {
      (game && game.address)
        ? <Game game={game} account={account} loading={loading} onClaimWin={onClaimWin} />
        : <EmptyView creating={creating} onCreate={onCreate} />
    }
  </div>
);

GameWrapper.propTypes = {
  creating: PropTypes.bool,
  loading: PropTypes.bool,
  game: schemas.game,
  account: PropTypes.string,
  onCreate: PropTypes.func,
  onClaimWin: PropTypes.func,
};

GameWrapper.defaultProps = {
  onCreate: () => {},
  creating: false,
  loading: false,
  game: {},
  account: '',
  onClaimWin: () => {},
};

export default GameWrapper;
