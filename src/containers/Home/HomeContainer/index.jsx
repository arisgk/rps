import { connect } from 'react-redux';
import { loadWeb3 } from '../../../actions/shared';
import Home from '../../../components/Home';
import { getAccount } from '../../../selectors/shared';

const mapStateToProps = (state, ownProps) => ({
  web3Ready: state.home.ui.web3Ready,
  fetchingGame: state.home.ui.fetchingGame,
  account: getAccount(state),
  history: ownProps.history,
  location: ownProps.location,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(loadWeb3());

  return {};
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
