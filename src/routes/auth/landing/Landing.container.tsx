import React, { FC, useCallback } from 'react';

import { $session } from 'stores';

import { LandingProps } from './Landing.props';

import LandingView from './Landing.view';

const LandingContainer: FC<LandingProps> = () => {
  const handleLogin = useCallback(() => {
    $session.actions.login();
  }, []);

  return <LandingView onLoginPress={handleLogin} />;
};

export default LandingContainer;
