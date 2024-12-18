import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ParLevels } from './pages/ParLevels';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/par-levels" element={<ParLevels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;