import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ConverterPage } from './pages/ConverterPage';
import { InfographicsPage } from './pages/InfographicsPage';
import { PricingPage } from './pages/PricingPage';
import { FeedbackPage } from './pages/FeedbackPage';

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <Routes>
        <Route path="/" element={<ConverterPage />} />
        <Route path="/v1" element={<InfographicsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
