import { connect } from 'react-redux';
import { loadWeb3 } from '../../../actions/shared';
import Home from '../../../components/Home';
import { getAccount } from '../../../selectors/shared';

const mapStateToProps = state => ({
  web3Ready: state.home.ui.web3Ready,
  account: getAccount(state),
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
