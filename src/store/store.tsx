import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore.tsx"; // Import du réducteur d'authentification
import userReducer from "./userStore.tsx"; // Import du réducteur d'utilisateur

// Configuration du magasin Redux
export const store = configureStore({
  reducer: {
    auth: authReducer, // Assignation du réducteur d'authentification au champ 'auth'
    user: userReducer, // Assignation du réducteur d'utilisateur au champ 'user'
  },
});

// Type pour représenter l'état global de l'application
export type RootState = ReturnType<typeof store.getState>;

// Type pour représenter la fonction de dispatch du magasin Redux
export type AppDispatch = typeof store.dispatch;

// Type générique pour les thunks Redux
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, // Type de la valeur de retour de la fonction thunk
  RootState, // Type de l'état global de l'application
  unknown, // Type pour les arguments supplémentaires passés à la fonction dispatch
  Action<string> // Type de l'action pouvant être dispatchée par la fonction thunk
>;
