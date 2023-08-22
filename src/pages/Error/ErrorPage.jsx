import React from 'react';
import "../Error/ErrorPage.scss";
import { Link } from 'react-router-dom';

// Composant fonctionnel ErrorPage
function ErrorPage() {
  return (
    <>
      <div className='error-main'>
        <h1>404</h1>
        <h2>Oops ! La page que vous demandez n'existe pas</h2>
        {/* Lien pour retourner à la page d'accueil */}
        <Link to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}

export default ErrorPage;
