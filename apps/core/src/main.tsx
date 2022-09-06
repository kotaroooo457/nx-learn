import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { App } from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <StrictMode>
      <Suspense fallback="...loading">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  </RecoilRoot>
);
