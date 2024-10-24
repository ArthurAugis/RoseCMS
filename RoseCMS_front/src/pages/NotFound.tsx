import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='error'>
      <h1>Erreur <span className="errorcode">404</span></h1>
      <p className="output">La page que vous recherchez a peut-être été supprimée, son nom a été modifié ou est temporairement indisponible.</p>
      <p className="output">
        Veuillez essayer de <Link to="/">retourner à la page d'accueil</Link>.
      </p>
    </div>
  );
}

export default NotFound;
