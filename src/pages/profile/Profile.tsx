import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.tsx";
import { useEffect } from "react";
import { getUser, toggleEditing } from "../../store/userStore.tsx";
import React from "react";
import { Button } from "../../components/Button.tsx";
import { Account } from "../../components/Account.tsx";
import { EditForm } from "../../components/EditForm.tsx";

export const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  const isEditing = useSelector((state: RootState) => state.user.isEditing);
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (!token) {
      dispatch({ type: "NAVIGATE_TO_LOGIN" }); // Dispatch une action pour naviguer vers la page de connexion
    } else {
      dispatch(getUser(token));
    }
  }, [dispatch, token]);

  return (
    <main className={isEditing ? "main bg-grey" : "main bg-dark"}>
      <div className="header">
        {user &&
          (isEditing ? (
            <EditForm userName={user.lastName} userFirstName={user.firstName} />
          ) : (
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}!
            </h1>
          ))}
        {!isEditing && (
          <Button
            type="edit-button"
            message="Edit Name"
            onClick={() => dispatch(toggleEditing())}
          />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount={2082.79}
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount={10928.42}
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount={184.3}
        description="Current Balance"
      />
    </main>
  );
};
