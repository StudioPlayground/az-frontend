import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '@/main.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { AzitRouter } from '@router/AzitRouter';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AzitRouter />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
