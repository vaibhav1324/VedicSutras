import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      onError: (err: any) => {
        const error =
          typeof err?.response?.data?.message === 'string'
            ? err?.response?.data?.message
            : 'Something went wrong with the request';

        // TODO: Put toast in view layer
        if (error === 'This account is not yet activated') return;
        //   toast({
        //     status: 'error',
        //     title: 'Error',
        //     description: error,
        //     isClosable: true,
        //     duration: 5000,
        //   });
      },
    },
    mutations: {
      onError: (err: any) => {
        const error =
          typeof err?.response?.data?.message === 'string'
            ? err?.response?.data?.message
            : 'Something went wrong with the request';

        // TODO: Put toast in view layer
        //   toast({
        //     status: 'error',
        //     title: 'Error',
        //     description: error,
        //     isClosable: true,
        //     duration: 5000,
        //   });
      },
    },
  },
});
