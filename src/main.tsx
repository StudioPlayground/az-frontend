import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '@/main.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { AzitRouter } from '@router/AzitRouter';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="454296083196-mjjocn4gngc1v8touer2ffurp8j8l85v.apps.googleusercontent.com">
      <RecoilRoot>
        <BrowserRouter>
          <AzitRouter />
        </BrowserRouter>
      </RecoilRoot>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
