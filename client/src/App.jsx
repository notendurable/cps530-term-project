import * as React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import ReactSummary from './ReactSummary';
import NodeSummary from './NodeSummary';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/react-summary' element={<ReactSummary />} />
        <Route path='/node-summary' element={<NodeSummary />} />
        {/* Add 404 handler page */}
      </Routes>
    </HashRouter>
  );
}

export default App;
