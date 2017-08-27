import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { calculateTimeRemaining } from '../../../../../../utils/time';

const styles = {
  container: {
    paddingTop: 12,
    paddingBottom: 12,
    color: 'rgba(0,0,0,0.54)',
  },
  value: {
    marginLeft: 4,
  },
  buttonContainer: {
    height: 72,
    display: 'flex',
    flexDirection: 'column',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
  },
};

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remaining: calculateTimeRemaining(props.lastAction, 5),
    };

    this.handleClaimWin = this.handleClaimWin.bind(this);
  }

  componentDidMount() {
    const { lastAction } = this.props;

    this.countdown = setInterval(() => {
      this.setState({
        remaining: calculateTimeRemaining(lastAction, 5),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  handleClaimWin() {
    const { onClaimWin, gameAddress } = this.props;

    onClaimWin(gameAddress);
  }

  render() {
    const { remaining } = this.state;

    return (
      (remaining > 0)
        ? <li style={styles.container}>
          <span>Time Remaining:</span>
          <span style={styles.value}>
            {`${remaining.minutes()}:${remaining.seconds()}`}
          </span>
          <div style={styles.buttonContainer}>
            <RaisedButton
              label="Claim Win"
              primary
              disabled={remaining > 0}
              onClick={this.handleClaimWin}
            />
          </div>
        </li>
        : <li style={styles.container}>
          <span>You can now claim win</span>
          <div style={styles.buttonContainer}>
            <RaisedButton
              label="Claim Win"
              primary
              disabled={remaining > 0}
              onClick={this.handleClaimWin}
            />
          </div>
        </li>
    );
  }
}

Timer.propTypes = {
  lastAction: PropTypes.instanceOf(Date),
  gameAddress: PropTypes.string,
  onClaimWin: PropTypes.func,
};

Timer.defaultProps = {
  lastAction: new Date(),
  gameAddress: '',
  onClaimWin: () => {},
};

export default Timer;
