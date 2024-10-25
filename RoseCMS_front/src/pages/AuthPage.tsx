import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Vérifie si l'email est vide ou invalide
    if (!email) {
      setMessageType('error');
      setMessage('Veuillez entrer une adresse e-mail.');
      setIsSubmitting(false); // Fin de l'animation
      return;
    } else if (!validateEmail(email)) {
      setMessageType('error');
      setMessage('Veuillez entrer une adresse e-mail valide.');
      setIsSubmitting(false); // Fin de l'animation
      return;
    }

    // Envoi de l'email (juste un console log pour l'instant)
    console.log(`Email pour réinitialisation: ${email}`);
    setEmail('');
    setMessageType('success');
    setMessage('Un lien de réinitialisation a été envoyé à votre adresse e-mail. Vérifiez votre boîte de réception !'); // Message de succès
    setIsSubmitting(false); // Fin de l'animation
  };

  const handleClosePopup = () => {
    setIsExiting(true); // Démarre l'animation de fermeture
    setTimeout(() => {
      setShowPopup(false); // Ferme la popup après l'animation
      setMessage(''); // Réinitialise le message
      setIsExiting(false); // Réinitialise l'état de fermeture
    }, 300); // Durée de l'animation
  };

  // Animation pour l'ouverture de la popup
  const popupAnimation = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 200, friction: 20 },
  });

  // Animation pour la fermeture de la popup
  const popupExitAnimation = useSpring({
    opacity: isExiting ? 0 : 1,
    transform: isExiting ? 'translateY(-20px)' : 'translateY(0)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          {isLogin ? 'Connexion' : 'Inscription'}
        </h2>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Entrez votre email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Mot de passe</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          {/* Forgot Password Link */}
          {isLogin && (
            <div className="text-right mb-4">
              <button
                onClick={() => setShowPopup(true)}
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline focus:outline-none"
                type="button"
              >
                Mot de passe oublié ?
              </button>
            </div>
          )}

          {/* Confirm Password (only for signup) */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Confirmer le mot de passe</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200"
                placeholder="Confirmez votre mot de passe"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 mt-4"
          >
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        {/* Toggle Auth Mode */}
        <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
          {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}{' '}
          <span
            onClick={toggleAuthMode}
            className="text-purple-600 dark:text-purple-400 font-semibold cursor-pointer"
          >
            {isLogin ? "S'inscrire" : 'Se connecter'}
          </span>
        </p>
      </div>

      {/* Popup for forgot password */}
      {showPopup && (
        <animated.div
          style={popupAnimation}
          className="fixed inset-0 flex items-start justify-center p-4 z-50 bg-black bg-opacity-50" // Popup en haut de la page pour reset le mot de passe
          onClick={handleClosePopup} // Ferme la popup en cliquant à côté
        >
          <animated.div
            style={popupExitAnimation}
            className="max-w-md mx-auto p-4 border border-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-800 dark:text-gray-200"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
          >
            <h3 className="text-lg font-semibold mb-2">Réinitialiser le mot de passe</h3>
            <p className="text-sm mb-2">Entrez votre adresse e-mail pour recevoir un lien de réinitialisation.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 mb-4"
              placeholder="Entrez votre e-mail"
              required
            />
            {/* State message */}
            {message && (
              <p className={`mb-4 p-2 rounded ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </p>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleForgotPassword}
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                disabled={isSubmitting} // Désactive le bouton pendant l'envoi
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer'}
              </button>
              <button
                onClick={handleClosePopup}
                className="ml-2 text-gray-600 dark:text-gray-400 hover:underline"
              >
                Annuler
              </button>
            </div>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
};

export default AuthPage;