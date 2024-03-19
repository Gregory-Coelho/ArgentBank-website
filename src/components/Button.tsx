import React from "react";

// Définition des props attendues pour Button
interface ButtonProps {
  type: string;
  message: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submit?: boolean;
}

// Composant fonctionnel Button
export const Button = ({ type, message, onClick, submit }: ButtonProps) => {
  return (
    <button
      // Définit le type de bouton en fonction de la prop submit
      type={submit ? "submit" : "button"}
      // Classe CSS du bouton déterminée par la prop type
      className={type}
      // Gestionnaire d'événements de clic
      onClick={onClick}
    >
      {/* Contenu textuel du bouton */}
      {message}
    </button>
  );
};
