import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import ReactSummary from './ReactSummary';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/react-summary' element={<ReactSummary />} />
        {/* Add 404 handler page */}
      </Routes>
    </div>
  );
}

export default App;
