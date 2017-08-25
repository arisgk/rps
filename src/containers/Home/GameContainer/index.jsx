import { connect } from 'react-redux';
import { getWeb3 } from '../../../actions/shared';
import Game from '../../../components/Home/Game';
import { getAccount } from '../../../selectors/shared';

const mapStateToProps = state => ({
  web3Ready: state.home.ui.web3Ready,
  account: getAccount(state),
});

const mapDispatchToProps = dispatch => ({
  loadWeb3: () => {
    dispatch(getWeb3());
  },
});

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

export default GameContainer;
