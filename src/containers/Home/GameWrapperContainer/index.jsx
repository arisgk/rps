import { connect } from 'react-redux';
import { createGame, claimWin } from '../../../actions/games';
import GameWrapper from '../../../components/Home/GameWrapper';
import { getAccount } from '../../../selectors/shared';

const mapStateToProps = state => ({
  game: state.home.entities.game,
  creating: state.home.ui.creating,
  account: getAccount(state),
});

const mapDispatchToProps = dispatch => ({
  onCreate: entity => dispatch(createGame(entity)),
  onClaimWin: address => dispatch(claimWin(address)),
});

const GameWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameWrapper);

export default GameWrapperContainer;
