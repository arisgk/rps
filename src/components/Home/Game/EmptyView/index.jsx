import React, { Component } from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
  h2: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.65)',
    fontSize: '110%',
  },
  buttonContainer: {
    height: 72,
    marginTop: 14,
    display: 'flex',
    flexDirection: 'column',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
};

class EmptyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opponent: '',
      stake: '',
      move: '',
    };

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSelectFieldChange = this.handleSelectFieldChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  /*
    Captures Enter key press
   */
  onKeyUp(event) {
    if (event.which === 13) {
      this.handleCreate();
    }
  }

  handleTextFieldChange(event, name) {
    switch (name) {
      case 'opponent':
        this.setState({
          ...this.state,
          opponent: event.target.value,
        });
        break;
      case 'stake':
        this.setState({
          ...this.state,
          stake: event.target.value,
        });
        break;
      default:
        break;
    }
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

  handleCreate() {
    const { onCreate } = this.props;

    onCreate({
      opponent: this.state.opponent,
      stake: this.state.stake,
      move: this.state.move,
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>New Game</h2>

        <TextField
          floatingLabelText="Opponent"
          value={this.state.opponent}
          onChange={event => this.handleTextFieldChange(event, 'opponent')}
          onKeyUp={this.onKeyUp}
        />

        <TextField
          floatingLabelText="Stake"
          value={this.state.stake}
          onChange={event => this.handleTextFieldChange(event, 'stake')}
          onKeyUp={this.onKeyUp}
        />

        <SelectField
          floatingLabelText="Move"
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
            label="Create Game"
            primary
            disabled={!this.state.opponent || !this.state.move
              || (!validator.isNumeric(this.state.stake))}
            onClick={this.handleCreate}
          />
        </div>
      </div>
    );
  }
}

EmptyView.propTypes = {
  onCreate: PropTypes.func,
};

EmptyView.defaultProps = {
  onCreate: () => {},
};

export default EmptyView;
