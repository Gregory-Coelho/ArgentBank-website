import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import logo from "../assets/img/argentBankLogo.png";
import { RootState } from "../store/store.tsx";
import { logout } from "../store/authStore.tsx";

// Composant fonctionnel Header
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Récupération de l'état d'authentification et de l'utilisateur depuis le store
  const { token } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);

  // État pour vérifier si l'utilisateur est connecté
  const [isLogged, setIsLogged] = useState(false);

  // Effet pour mettre à jour l'état d'authentification lorsque le token change
  useEffect(() => {
    if (token !== null) {
      setIsLogged(true);
      navigate("/profile"); // Redirige vers le profil si l'utilisateur est connecté
    } else {
      setIsLogged(false);
    }
  }, [navigate, token]);

  // Fonction pour déconnecter l'utilisateur
  const handleSignOut = () => {
    dispatch(logout());
    setIsLogged(false);
  };

  return (
    <nav className="main-nav">
      {/* Logo d'Argent Bank avec un lien vers la page d'accueil */}
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {/* Affichage des liens en fonction de l'état de connexion */}
      {isLogged ? (
        // Si l'utilisateur est connecté
        <div>
          {/* Lien vers le profil de l'utilisateur */}
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user ? user.userName : "Loading..."}
          </Link>
          {/* Lien pour se déconnecter */}
          <Link to="/" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        // Si l'utilisateur n'est pas connecté
        <div>
          {/* Lien vers la page de connexion */}
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};
