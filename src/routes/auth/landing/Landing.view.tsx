import React, { FC } from 'react';

import { classes } from './Landing.style';

import { LandingViewProps } from './Landing.props';

import { AnimatedSvg } from 'components/core/AnimatedSvg';

const LandingView: FC<LandingViewProps> = ({ onLoginPress }) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.content}>
          <div className={classes.header}>
            <h1 className={classes.title}>Vedic sutras</h1>
            <button className={classes.menu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className={classes.menuIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="lg:w-1/2">
            <p className={classes.subHeading}>Sanatan Dharma</p>
            <h1 className={classes.subHeading2}>
              Connecting with the ancient wisdom
            </h1>
            <p className={classes.paragraph}>
              Discover the practices and knowledge of Sanatan Dharma that can
              help you lead a balanced and fulfilling life.
            </p>
            <div className="mt-8 sm:flex">
              <a href="/" className={classes.getStarted} onClick={onLoginPress}>
                Get Started
              </a>
              <a href="/" className={classes.learnMore}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <AnimatedSvg />
      </div>
    </div>
  );
};

export default LandingView;
