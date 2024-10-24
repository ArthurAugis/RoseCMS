import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full py-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
        <h1 className="text-5xl font-extrabold text-white">
          Bienvenue sur <span className="text-yellow-300">RoseCMS</span>
        </h1>
        <p className="text-lg text-gray-100 mt-4">
          Créez, gérez et publiez vos sites web avec simplicité et efficacité.
        </p>
      </header>

      {/* Section de présentation */}
      <section className="my-12 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Simplicité d'utilisation
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Avec RoseCMS, aucune connaissance technique n'est requise. Créez des pages en quelques clics grâce à une interface intuitive.
            </p>
            <img
              src="/images/simplicite.png"
              alt="Simplicité"
              className="mt-4 w-full h-40 object-cover rounded-lg shadow-sm"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Performances optimisées
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Optimisé pour garantir une vitesse de chargement rapide, RoseCMS assure des performances exceptionnelles pour tous types de projets web.
            </p>
            <img
              src="/images/performance.png"
              alt="Performances"
              className="mt-4 w-full h-40 object-cover rounded-lg shadow-sm"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Flexibilité totale
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Personnalisez votre site avec une bibliothèque riche de thèmes et de plugins. Développez vos propres extensions pour des fonctionnalités uniques.
            </p>
            <img
              src="/images/flexibilite.png"
              alt="Flexibilité"
              className="mt-4 w-full h-40 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Fonctionnalités supplémentaires */}
      <section className="my-16 w-full max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Fonctionnalités Clés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Gestion de contenu avancée
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gérez facilement vos pages, articles, et médias depuis une interface conviviale. Ajoutez du contenu dynamique en quelques clics.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Éditeur visuel
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Créez des pages magnifiques avec notre éditeur glisser-déposer. Organisez vos blocs de contenu et personnalisez l'apparence en temps réel.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Sécurité renforcée
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Vos données et celles de vos utilisateurs sont protégées avec un chiffrement robuste et des options de sécurité avancées.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Support multilingue
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Développez votre site en plusieurs langues avec notre système multilingue intégré, pour une audience internationale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-500 text-white py-12 w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à découvrir RoseCMS ?</h2>
        <p className="mb-8">Inscrivez-vous aujourd'hui et commencez à créer votre site en quelques minutes.</p>
        <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500">
          Commencez maintenant
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 w-full text-center text-gray-500 dark:text-gray-400">
        <p>&copy; 2024 RoseCMS. Tous droits réservés.</p>
        <p>Conçu pour les créateurs, développeurs et entreprises de toutes tailles.</p>
      </footer>
    </div>
  );
}

export default Accueil;