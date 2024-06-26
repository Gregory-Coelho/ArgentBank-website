import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.tsx";
import React from "react";
import { loginUser } from "../../store/authStore.tsx";

export const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  // Définition des états pour l'email, le mot de passe et le bouton "Remember Me"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Ajout de l'état pour le message d'erreur

  console.log(errorMessage);
  console.log(rememberMe);

  const fetchUserProfile = async () => {
    try {
      // Dispatch de l'action getUserProfile pour récupérer le profil de l'utilisateur
      await dispatch(loginUser({ email, password, rememberMe }));
    } catch (error) {
      // Si une erreur se produit, capturez-la et affichez un message d'erreur approprié
      setErrorMessage("Wrong password or username");
    }
  };

  // Fonction de soumission du formulaire de connexion
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Dispatch de l'action loginUser avec les informations d'identification
    dispatch(loginUser({ email, password, rememberMe }));
  };
  // Fonction pour gérer le changement d'état de la case à cocher "Remember Me"
  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="submit"
            className="sign-in-button"
            onClick={() => {
              fetchUserProfile();
            }}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
