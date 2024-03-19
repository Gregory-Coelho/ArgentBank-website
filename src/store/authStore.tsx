import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../services/api.ts";

// Interface décrivant l'état de l'authentification
interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  rememberMe: boolean;
}

// Interface pour les arguments de connexion
interface LoginArgs {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Interface pour les erreurs de connexion
interface LoginError {
  message: string;
}

// Action asynchrone pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk<
  string, // Type de la valeur de retour
  LoginArgs, // Type des arguments
  { rejectValue: LoginError } // Type de la valeur de rejet en cas d'erreur
>(
  "auth/login", // Nom de l'action
  async ({ email, password, rememberMe }, thunkAPI) => {
    // Fonction asynchrone pour effectuer la connexion
    try {
      const response = await login(email, password); // Appel à la fonction de connexion

      thunkAPI.dispatch(setRememberMe(rememberMe)); // Mise à jour de l'option "Remember Me"
      return response.body.token; // Retourne le token depuis la réponse
    } catch (error) {
      const err = error as Error;
      return thunkAPI.rejectWithValue({ message: err.message }); // Rejette la valeur avec un message d'erreur
    }
  }
);

// Action pour définir l'option "Remember Me"
export const setRememberMe = createAction<boolean>("auth/setRememberMe");

// État initial de l'authentification
const initialState: AuthState = {
  token:
    localStorage.getItem("token") || sessionStorage.getItem("token") || null,
  status: "idle",
  error: null,
  rememberMe: false,
};

// Slice Redux pour gérer l'état de l'authentification
const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action pour déconnecter l'utilisateur
    logout: (state) => {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Réducteur pour gérer l'action setRememberMe
      .addCase(setRememberMe, (state, action) => {
        state.rememberMe = action.payload;
      })
      // Réducteur pour gérer l'état de chargement lors de la connexion de l'utilisateur
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      // Réducteur pour gérer l'état réussi lors de la connexion de l'utilisateur
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
        // Stockage du token en fonction de l'option "Remember Me"
        if (state.rememberMe) {
          localStorage.setItem("token", action.payload);
        } else {
          sessionStorage.setItem("token", action.payload);
        }
        state.error = null;
      })
      // Réducteur pour gérer l'état d'échec lors de la connexion de l'utilisateur
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.message;
        }
      });
  },
});

// Export des actions
export const { logout } = authStore.actions;

// Export du réducteur
export default authStore.reducer;
