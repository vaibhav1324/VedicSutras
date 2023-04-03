import React, { FC } from 'react';

import { motion } from 'framer-motion';

import { classes, animationVariants, transitionSpec } from './NotFound.style';

import { NotFoundProps } from './NotFound.props';

const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className={classes.container}>
      <motion.div
        exit="exit"
        initial="hidden"
        animate="visible"
        className={classes.content}
        variants={animationVariants}
        transition={transitionSpec}
      >
        <h1 className={classes.heading}>404</h1>
        <h2 className={classes.subheading}>Page Not Found</h2>
        <p className="text-gray-600">
          The page you are looking for does not exist or has been removed.
        </p>
        <a href="/" className={classes.btn}>
          GO TO HOME
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
