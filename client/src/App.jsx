import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ReactSummary from './ReactSummary';
import NodeSummary from './NodeSummary';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/react-summary' element={<ReactSummary />} />
        <Route path='/node-summary' element={<NodeSummary />} />
        {/* Add 404 handler page */}
      </Routes>
    </div>
  );
}

export default App;
