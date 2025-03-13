import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ModelDetails from './components/ModelDetails';
import Home from './components/Home';
import DatasetDetails from './components/DatasetDetails';
import Prediction from './components/Prediction';
import ThankYou from './components/ThankYou';
import DualContentPage from './components/DualContentPage';

const App = () => {
    const dualContentRef = useRef(null);
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Home page with all components */}
          <Route path="/" element={
            <>
            <Home dualContentRef={dualContentRef}/> 
            <DualContentPage />
            <div ref={dualContentRef}><Prediction /></div>
            <ThankYou />
            </>
          } />

          {/* Individual pages for new tabs */}
          <Route path="/model-overview" element={<ModelDetails />} />
          <Route path="/data-details" element={<DatasetDetails />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;