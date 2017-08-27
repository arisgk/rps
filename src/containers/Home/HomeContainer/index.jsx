import { connect } from 'react-redux';
import { loadWeb3 } from '../../../actions/shared';
import { getGame } from '../../../actions/games';
import Home from '../../../components/Home';
import { getAccount } from '../../../selectors/shared';

const mapStateToProps = (state, ownProps) => ({
  web3Ready: state.home.ui.web3Ready,
  fetchingGame: state.home.ui.fetchingGame,
  account: getAccount(state),
  gameAddress: ownProps.match.gameAddress,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(loadWeb3());

  return {
    loadGame: address => dispatch(getGame(address)),
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
