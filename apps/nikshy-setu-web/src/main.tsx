// eslint-disable-next-line import/no-extraneous-dependencies
import { StrictMode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CookiesProvider } from 'react-cookie';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <App />
    </CookiesProvider>
  </StrictMode>
);
