import React, { FC } from 'react';

import { HomeProps } from './Home.props';

import HomeView from './Home.view';

const HomeContainer: FC<HomeProps> = (props) => {
  return <HomeView />;
};

export default HomeContainer;
