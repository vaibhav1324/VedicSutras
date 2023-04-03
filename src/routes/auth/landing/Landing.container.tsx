import React, { FC } from 'react';

import { LandingProps } from './Landing.props';

import LandingView from './Landing.view';

const LandingContainer: FC<LandingProps> = () => {
  return <LandingView />;
};

export default LandingContainer;
