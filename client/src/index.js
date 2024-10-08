import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5 } },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-right" />
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
