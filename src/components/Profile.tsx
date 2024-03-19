import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { AppDispatch, RootState } from "../store/store";
import { getUser } from "../store/authStore";

export const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  if (token === null) {
    window.location.href = "/login";
  }

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
    } else {
      window.location.href = "/login";
    }
  }, [dispatch, token]);

  return (
    <div>
      Page utilisateur connecté
      {user && (
        <p>
          Bienvenue {user.firstName} {user.lastName}
        </p>
      )}
    </div>
  );
};
