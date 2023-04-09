import React, { FC } from 'react';

import { $session } from 'stores';

import { HomeViewProps } from './Home.props';

const HomeView: FC<HomeViewProps> = (props) => (
  <div className="flex h-screen w-screen">
    <button className="btn-primary" onClick={() => $session.actions.logout()}>
      LOGOUT
    </button>
  </div>
);

export default HomeView;
