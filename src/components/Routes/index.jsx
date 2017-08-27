import React from 'react';
import { Route } from 'react-router';
import HomeContainer from '../../containers/Home/HomeContainer';

const Routes = () => (
  <div>
    <Route exact path="/:gameAddress" component={HomeContainer} />
    <Route exact path="/" component={HomeContainer} />
  </div>
);

export default Routes;
