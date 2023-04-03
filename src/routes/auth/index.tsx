import React, { FC } from 'react';

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
    <div className="flex-col">
      <Switch>
        {Object.entries(routeConfig).map(([key, val]) => (
          <RouteWithSubRoutes key={key} {...val} exact />
        ))}
      </Switch>
    </div>
  );
};

export default AuthRotues;
