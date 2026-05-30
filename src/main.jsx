import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react";

// Font Imports
import '@fontsource/syne/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);