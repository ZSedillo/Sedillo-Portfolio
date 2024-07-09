import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import Email from './Email.jsx';

import { HashRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/App" element={<App />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  </HashRouter>
);