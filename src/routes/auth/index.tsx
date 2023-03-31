import React, { FC } from 'react';

import bg from 'assets/bg.jpg';

const style = { backgroundImage: `url(${bg})` };

const AuthRotues: FC = () => {
  return (
    <div className="center" style={style}>
      <div className="navbar bg-base-100 absolute top-0">
        <a className="btn btn-ghost text-4xl">Vedic Sutras</a>
      </div>
    </div>
  );
};

export default AuthRotues;