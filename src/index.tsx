import React from 'react';
import { createRoot } from 'react-dom/client';
import {RecoilRoot} from 'recoil';

import App from './App';

// TODO: Do we need all these weights?
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';


const container = document.getElementById('usaon-vta-visualizer-appcontainer');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
