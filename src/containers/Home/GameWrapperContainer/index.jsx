import { connect } from 'react-redux';
import { createGame, claimWin, getGame, play } from '../../../actions/games';
import GameWrapper from '../../../components/Home/GameWrapper';
import { getAccount } from '../../../selectors/shared';

const mapStateToProps = (state, ownProps) => ({
  game: state.home.entities.game,
  creating: state.home.ui.creating,
  account: getAccount(state),
  address: ownProps.match.params.address,
  fetching: state.home.ui.fetching,
});

const mapDispatchToProps = dispatch => ({
  onCreate: entity => dispatch(createGame(entity)),
  onClaimWin: game => dispatch(claimWin(game)),
  onFetch: address => dispatch(getGame(address)),
  onPlay: data => dispatch(play(data)),
});

const GameWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameWrapper);

export default GameWrapperContainer;
