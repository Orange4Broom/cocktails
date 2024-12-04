import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchProvider } from '@context/SearchContext.tsx';
import { AlcoholProvider } from '@context/AlcoholContext.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.scss';
import '@styles/reset.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchProvider>
      <AlcoholProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AlcoholProvider>
    </SearchProvider>
  </StrictMode>,
)
