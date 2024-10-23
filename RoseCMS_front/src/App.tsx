import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gestion from './pages/cms/Gestion';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
