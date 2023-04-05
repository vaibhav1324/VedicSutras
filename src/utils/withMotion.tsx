import React, { ComponentType } from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

const defaultOptions = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.8, ease: 'easeInOut' },
};

const withMotion = (
  WrappedComponent: ComponentType<RouteComponentProps<any>>,
  animateOptions?: any
) => {
  const options = animateOptions || defaultOptions;

  const AnimatedPage: ComponentType<RouteComponentProps<any>> = (props) => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={props.match.path}
          initial={options.initial}
          animate={options.animate}
          exit={options.exit}
          transition={options.transition}
        >
          <WrappedComponent {...props} />
        </motion.div>
      </AnimatePresence>
    );
  };

  return AnimatedPage;
};

export default withMotion;
