import { BrowserRouter } from 'react-router-dom';

import { queryClient } from './utils';
import { QueryClientProvider } from 'react-query';

import Routes from 'routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
