import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import Gestion from './pages/cms/Gestion';
import Accueil from './pages/Accueil';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
