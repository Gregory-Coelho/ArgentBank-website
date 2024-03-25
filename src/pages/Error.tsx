import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <main className="main bg-dark">
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    </main>
  );
};
