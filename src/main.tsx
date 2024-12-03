import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchProvider } from '@context/SearchContext.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SearchProvider>
  </StrictMode>,
)
