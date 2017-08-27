import React from 'react';
import { Route } from 'react-router';
import HomeContainer from '../../containers/Home/HomeContainer';

const Routes = () => (
  <div>
    <Route path="/" component={HomeContainer} />
  </div>
);

export default Routes;
