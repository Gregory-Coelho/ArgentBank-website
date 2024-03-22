import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "./Button.tsx";
import { AppDispatch, RootState } from "../store/store.tsx";
import { putUser, toggleEditing } from "../store/userStore.tsx";

// Définition des props attendues pour EditForm
interface EditFormProps {
  userName: string;
  userFirstName: string;
}

// Composant fonctionnel EditForm
export const EditForm = ({ userName, userFirstName }: EditFormProps) => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  // Utilisation de useState pour gérer les états des champs de formulaire
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userName);

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      // Dispatch de l'action putUser avec les données mises à jour
      dispatch(putUser({ token, user: { firstName, lastName } }));
      // Dispatch de l'action pour désactiver le mode édition
      dispatch(toggleEditing());
    }
  };

  return (
    <form className="form edit-form" onSubmit={handleSubmit}>
      <h2>Welcome back</h2>
      <div className="inputs-form">
        <div className="input-group">
          <div className="input-element">
            <label className="sr-only" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-element">
            <label className="sr-only" htmlFor="last-name">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="button-group">
          {/* Bouton pour enregistrer les modifications */}
          <Button type="edit-form-btn" message="Save" submit={true} />
          {/* Bouton pour annuler l'édition */}
          <Button
            type="edit-form-btn"
            message="Cancel"
            onClick={() => dispatch(toggleEditing())}
          />
        </div>
      </div>
    </form>
  );
};
