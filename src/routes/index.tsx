import React, { FC } from 'react';

import { $session } from 'stores';

import AuthRoutes from './auth';
import MainRoutes from './main';

const Routes: FC = () => {
  const isAuth = $session.selectors.useIsAuth();

  return isAuth ? <MainRoutes /> : <AuthRoutes />;
};

export default Routes;
