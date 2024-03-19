import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.tsx";
import { Button } from "./Button.tsx";

// Définition des props attendues pour Account
interface AccountCardProps {
  title: string;
  amount: number;
  description: string;
}

// Composant fonctionnel Account
export const Account = ({ title, amount, description }: AccountCardProps) => {
  // Utilisation du hook useSelector pour obtenir l'état de l'édition de l'utilisateur
  const isEditing = useSelector((state: RootState) => state.user.isEditing);

  // Fonction de gestion de clic pour l'alerte de transaction
  const handleTransactionClick = () => {
    alert("Transaction");
  };

  return (
    <section className={`account ${isEditing ? "account-isEditing" : ""}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        {/* Bouton pour afficher les transactions */}
        <Button
          type={
            isEditing ? "transaction-button-isEditing" : "transaction-button"
          }
          message="View transactions"
          onClick={handleTransactionClick}
        />
      </div>
    </section>
  );
};
