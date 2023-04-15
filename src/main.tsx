import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { AzitRouter } from './router/AzitRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AzitRouter />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
