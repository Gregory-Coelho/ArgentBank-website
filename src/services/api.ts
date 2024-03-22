// Importation de la bibliothèque Axios pour effectuer des requêtes HTTP
import axios from "axios";

// Création d'une instance Axios avec une URL de base pointant vers l'API
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

// Fonction pour se connecter à l'API avec une adresse e-mail et un mot de passe
export const login = async (email: string, password: string) => {
  // Envoi d'une requête POST à l'endpoint "/user/login" avec les informations de connexion
  const response = await api.post("/user/login", {
    email,
    password,
  });
  // Renvoi des données de réponse de l'API après la connexion
  return response.data;
};

// Fonction pour récupérer les informations de l'utilisateur depuis l'API
export const get = async (token: string) => {
  // Envoi d'une requête POST à l'endpoint "/user/profile" pour récupérer les données du profil utilisateur
  const response = await api.post(
    "/user/profile",
    {},
    {
      // Ajout du jeton d'authentification dans les en-têtes de la requête
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // Renvoi des données de réponse de l'API
  return response.data;
};

// Fonction pour mettre à jour les informations de l'utilisateur sur l'API
export const updateUser = async (
  token: string,
  user: { firstName: string; lastName: string }
) => {
  // Envoi d'une requête PUT à l'endpoint "/user/profile" pour mettre à jour les données du profil utilisateur
  const response = await api.put("/user/profile", user, {
    // Ajout du jeton d'authentification dans les en-têtes de la requête
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // Renvoi des données de réponse de l'API
  return response.data;
};
