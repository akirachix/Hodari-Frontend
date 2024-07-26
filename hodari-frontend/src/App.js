import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

function App() {
  return (
   
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </div>
  </Router>
);
}


export default App;