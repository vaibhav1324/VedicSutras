import clsx from 'clsx';

export const classes = {
  container: clsx(
    'flex',
    'items-center',
    'justify-center',
    'min-h-screen',
    'bg-gray-100'
  ),
  content: clsx(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'p-8',
    'space-y-4',
    'bg-white',
    'rounded-lg',
    'shadow-lg'
  ),
  heading: clsx('text-6xl', 'font-semibold'),
  subheading: clsx('text-2xl', 'font-semibold'),
  btn: clsx('btn', 'btn-primary'),
};

export const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const transitionSpec = {
  duration: 0.6,
  ease: 'easeInOut',
};
