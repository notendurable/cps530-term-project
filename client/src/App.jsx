import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ReactSummary from './ReactSummary';
import NodeSummary from './NodeSummary';
import ReactInstallTutorial from './ReactInstallTutorial';
import NodeInstallTutorial from './NodeInstallTutorial';
import ImageRandomizer from './ImageRandomizer';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/react-summary' element={<ReactSummary />} />
        <Route path='/node-summary' element={<NodeSummary />} />
        <Route path='/react-install-tutorial' element={<ReactInstallTutorial />}/>
        <Route path='/node-install-tutorial' element={<NodeInstallTutorial />}/>
        <Route path='/image-randomizer' element={<ImageRandomizer />}/>
        {/* Add 404 handler page */}
      </Routes>
    </HashRouter>
  );
}

export default App;
