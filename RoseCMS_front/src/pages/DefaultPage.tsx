import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiChevronRight } from 'react-icons/fi';

const DefaultPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full py-4 bg-purple-600 text-white text-center">
        <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
          Bienvenue sur votre site RoseCMS
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          🎉 Félicitations ! Voici votre site de départ, prêt à être personnalisé.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 flex items-center gap-2">
          Commencez à ajouter votre contenu unique et à le façonner comme vous le souhaitez. ✨
        </p>
        <Link
          to="/gestion"
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center gap-2"
        >
          <FiSettings /> Personnaliser mon site <FiChevronRight />
        </Link>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-800 text-gray-400 text-center">
        <p>&copy; 2024 RoseCMS. Créez, personnalisez et partagez facilement ! 🚀</p>
      </footer>
    </div>
  );
};

export default DefaultPage;
