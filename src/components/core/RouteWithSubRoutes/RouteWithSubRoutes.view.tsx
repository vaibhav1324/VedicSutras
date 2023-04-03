import React from 'react';

import { Route } from 'react-router-dom';

import { RouteWithSubRoutesProps } from './RouteWithSubRoutes.props';

const RouteWithSubRoutes = (props: RouteWithSubRoutesProps): JSX.Element => {
  const { routes = {}, ...route } = props;
  return (
    <Route {...route}>
      {Object.values(routes).map((subRoute) => (
        <RouteWithSubRoutes key={subRoute.path} {...subRoute} />
      ))}
    </Route>
  );
};

export default RouteWithSubRoutes;
