import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Project1 from './project1.jsx';
import Project2 from './project2.jsx';
import Project3 from './project3.jsx';

import MyWebsiteAbout from './MyWebsiteAbout.jsx';
import MyWebsiteWork from './MyWebsiteWork.jsx';
import MyWebsiteNoteP from './MyWebsiteNoteP.jsx';

import Email from './Email.jsx';

import { HashRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/App" element={<App />} />
      <Route path="/MyWebsite" element={<MyWebsiteAbout />} />
      <Route path="/MyWebsiteWork" element={<MyWebsiteWork />} />
      <Route path="/MyWebsiteNoteP" element={<MyWebsiteNoteP />} />
      <Route path="/blackjack" element={<Project1 />} />
      <Route path="/dice" element={<Project2 />} />
      <Route path="/drumkit" element={<Project3 />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  </HashRouter>
);