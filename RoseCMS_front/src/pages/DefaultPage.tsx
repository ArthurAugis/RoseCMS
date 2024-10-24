import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setIsDarkMode(true);
    }
  }, [navigate]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-4xl font-bold mb-4">Bienvenue dans votre CMS !</h1>
      <p className="text-lg mb-6">Ceci est la page par défaut. Vous pouvez commencer à modifier votre site en cliquant sur le bouton ci-dessous.</p>
      <a href="/gestion" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Accéder à la gestion
      </a>

      <div className="fixed bottom-4 right-4">
        <button 
          onClick={toggleDarkMode} 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition"
        >
          {isDarkMode ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-500" />}
        </button>
      </div>
    </div>
  );
}

export default Home;
