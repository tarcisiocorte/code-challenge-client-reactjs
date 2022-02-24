import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../Main';

function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
}

export default Routes;