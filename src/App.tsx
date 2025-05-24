import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import QVivarium from './pages/QVivarium';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-gray-800">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qvivarium" element={<QVivarium />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;