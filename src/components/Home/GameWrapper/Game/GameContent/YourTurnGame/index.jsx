import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import GameListItem from '../GameListItem';
import { getOpponent } from '../../../../../../utils/games';
import * as schemas from '../../../../../../schemas/react';

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  buttonContainer: {
    height: 72,
    display: 'flex',
    flexDirection: 'column',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
};

class YourTurnGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      move: '',
    };

    this.handleSelectFieldChange = this.handleSelectFieldChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleSelectFieldChange(event, index, value, name) {
    switch (name) {
      case 'move':
        this.setState({
          ...this.state,
          move: value,
        });
        break;
      default:
        break;
    }
  }

  handlePlay() {
    const { onPlay, game } = this.props;

    onPlay({
      move: this.state.move,
      address: game.address,
    });
  }

  render() {
    const { game, account } = this.props;

    return (
      <ul style={styles.list}>
        <GameListItem title="Opponent" value={getOpponent(game, account)} />
        <GameListItem title="Stake" value={game.stake} />

        <SelectField
          floatingLabelText="Move"
          fullWidth
          value={this.state.move}
          onChange={(event, index, value) =>
            this.handleSelectFieldChange(event, index, value, 'move')
          }
        >
          <MenuItem
            value="rock"
            primaryText="Rock"
          />
          <MenuItem
            value="paper"
            primaryText="Paper"
          />
          <MenuItem
            value="scissors"
            primaryText="Scissors"
          />
          <MenuItem
            value="spock"
            primaryText="Spock"
          />
          <MenuItem
            value="lizard"
            primaryText="Lizard"
          />
        </SelectField>

        <div style={styles.buttonContainer}>
          <RaisedButton
            label="Play"
            primary
            disabled={!this.state.move}
            onClick={this.handlePlay}
          />
        </div>
      </ul>
    );
  }
}

YourTurnGame.propTypes = {
  game: schemas.game,
  account: PropTypes.string,
  onPlay: PropTypes.func,
};

YourTurnGame.defaultProps = {
  game: {},
  account: '',
  onPlay: () => {},
};

export default YourTurnGame;
