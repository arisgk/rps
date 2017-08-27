import moment from 'moment';

export const calculateTimeRemaining = (lastAction, timeout) => {
  const now = moment().unix();
  const endgame = moment(lastAction).add(timeout, 'minutes').unix();

  const diffTime = endgame - now;
  return moment.duration(diffTime * 1000, 'milliseconds');
};
