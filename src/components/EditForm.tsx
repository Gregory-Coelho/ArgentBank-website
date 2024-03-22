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
  userLastName: string;
}

// Composant fonctionnel EditForm
export const EditForm = ({
  userName,
  userFirstName,
  userLastName,
}: EditFormProps) => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  // Utilisation de useState pour gérer les états des champs de formulaire

  const [user, setUser] = useState(userName);

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      // Dispatch de l'action putUser avec les données mises à jour
      dispatch(
        putUser({
          token,
          user: { userName, firstName: userFirstName, lastName: userLastName },
        })
      );
      // Dispatch de l'action pour désactiver le mode édition
      dispatch(toggleEditing());
    }
  };

  return (
    <form className="form edit-form" onSubmit={handleSubmit}>
      <h2>Edit user info</h2>
      <div className="inputs-form">
        <div className="input-group">
          <div className="input-element">
            User name:
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={user ? user : ""}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="input-element">
            First Name:
            <input
              disabled
              id="first-name"
              name="first-name"
              value={userFirstName}
            />
          </div>
          <div className="input-element">
            Last Name:
            <input
              disabled
              id="last-name"
              name="last-name"
              value={userLastName}
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
