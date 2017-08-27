import React from 'react';
import { Switch, Route } from 'react-router';
import GameWrapperContainer from '../../../containers/Home/GameWrapperContainer';

const styles = {
  container: {
    flex: 'auto',
    display: 'flex',
    WebkitFlexDirection: 'column',
    flexDirection: 'column',
  },
};

const Games = () => (
  <div style={styles.container}>
    <Switch>
      <Route path="/games/new" component={GameWrapperContainer} />
      <Route path="/games/:address" component={GameWrapperContainer} />
    </Switch>
  </div>
);

export default Games;
