import { connect } from 'react-redux';
import { getWeb3 } from '../../../actions/shared';
import Home from '../../../components/Home';

const mapStateToProps = state => ({
  web3Ready: state.home.ui.web3Ready,
});

const mapDispatchToProps = dispatch => ({
  loadWeb3: () => {
    dispatch(getWeb3());
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
