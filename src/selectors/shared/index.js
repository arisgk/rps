import { createSelector } from 'reselect';

export const getAccount = state => (
  state.web3
    ? state.web3.eth.accounts[0]
    : null
);
