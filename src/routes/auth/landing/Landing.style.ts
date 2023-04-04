import clsx from 'clsx';

export const classes = {
  container: clsx('h-screen', 'w-screen', 'flex', 'flex-row'),
  left: clsx('flex', 'flex-1'),
  right: clsx(
    'flex',
    'flex-1',
    'bg-[#fef6e7]',
    'max-w-[50%]',
    'justify-center',
    'items-center'
  ),
  title: clsx('text-4xl font-bold'),
  img: clsx('w-full', 'object-contain', 'border-none'),
  content: clsx('flex', 'flex-1', 'p-16', 'flex-col'),
  header: clsx('flex', 'flex-1', 'flex-row', 'justify-between'),
  menu: clsx('btn btn-square btn-ghost'),
  menuIcon: clsx('inline-block w-5 h-5 stroke-current'),
  subHeading: clsx('font-medium text-indigo-600 uppercase tracking-wide'),
  subHeading2: clsx('mt-2 text-3xl font-bold text-gray-900 sm:text-4xl'),
  paragraph: clsx('mt-3 text-lg text-gray-500'),
  getStarted: clsx('btn btn-primary'),
  learnMore: clsx('btn btn-secondary mt-3 sm:mt-0 sm:ml-3'),
};
