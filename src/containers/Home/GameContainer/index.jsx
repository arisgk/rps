import { connect } from 'react-redux';
import { createGame } from '../../../actions/games';
import Game from '../../../components/Home/Game';

const mapStateToProps = state => ({
  game: state.home.entities.game,
});

const mapDispatchToProps = dispatch => ({
  onCreate: entity => dispatch(createGame(entity)),
});

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

export default GameContainer;
