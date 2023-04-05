import React, { FC } from 'react';

import { withMotion } from 'utils';

import { Switch } from 'react-router-dom';

import { NotFound } from 'components/modules';
import { RouteWithSubRoutes } from 'components/core';

import Landing from './landing';

const routeConfig = Object.freeze({
  LANDING: {
    component: Landing,
    path: '/',
  },
  NOT_FOUND: {
    component: NotFound,
    path: '/*',
  },
});

const AuthRotues: FC = () => {
  return (
    <Switch>
      {Object.entries(routeConfig).map(([key, val]) => (
        <RouteWithSubRoutes
          key={key}
          path={val.path}
          component={withMotion(val.component)}
          exact
        />
      ))}
    </Switch>
  );
};

export default AuthRotues;
