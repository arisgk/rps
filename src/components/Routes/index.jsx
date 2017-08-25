import React from 'react';
import { Route } from 'react-router';
import HomeContainer from '../../containers/Home/HomeContainer';

const Routes = () => (
  <Route exact path="/" component={HomeContainer} />
);

export default Routes;
