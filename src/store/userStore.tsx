import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, updateUser } from "../services/api.ts";

// Interface décrivant l'état de l'utilisateur
interface UserState {
  user: User | null; // Informations sur l'utilisateur
  isEditing: boolean; // Indique si l'utilisateur est en mode édition
  status: "idle" | "loading" | "succeeded" | "failed"; // Statut de l'action en cours
  error: string | null; // Message d'erreur en cas d'échec
}

// Interface décrivant les informations sur l'utilisateur
interface User {
  firstName: string;
  lastName: string;
  userName: string;
}

// Interface pour les erreurs de connexion
interface LoginError {
  message: string;
}

// Action asynchrone pour récupérer les informations de l'utilisateur
export const getUser = createAsyncThunk<
  User, // Type de la valeur de retour
  string, // Type de l'argument (token)
  { rejectValue: LoginError } // Type de la valeur de rejet en cas d'erreur
>("auth/getUser", async (token, thunkAPI) => {
  try {
    const response = await get(token); // Appel à la fonction API pour récupérer les informations de l'utilisateur
    return response.body; // Retourne les informations de l'utilisateur depuis la réponse
  } catch (error) {
    const err = error as Error;
    return thunkAPI.rejectWithValue({ message: err.message }); // Rejette la valeur avec un message d'erreur
  }
});

// Action asynchrone pour mettre à jour les informations de l'utilisateur
export const putUser = createAsyncThunk<
  User, // Type de la valeur de retour
  {
    token: string;
    user: { firstName: string; lastName: string; userName: string };
  }, // Type des arguments (token et informations utilisateur)
  { rejectValue: LoginError } // Type de la valeur de rejet en cas d'erreur
>("auth/putUser", async ({ token, user }, thunkAPI) => {
  try {
    const response = await updateUser(token, user); // Appel à la fonction API pour mettre à jour les informations de l'utilisateur
    return response.body; // Retourne les informations de l'utilisateur depuis la réponse
  } catch (error) {
    const err = error as Error;
    return thunkAPI.rejectWithValue({ message: err.message }); // Rejette la valeur avec un message d'erreur
  }
});

// État initial de l'utilisateur
const initialState: UserState = {
  user: null,
  isEditing: false,
  status: "idle",
  error: null,
};

// Slice Redux pour gérer l'état de l'utilisateur
const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action pour basculer le mode d'édition de l'utilisateur
    toggleEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
  extraReducers: (builder) => {
    builder
      // Réducteur pour gérer l'état de chargement lors de la récupération des informations de l'utilisateur
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      // Réducteur pour gérer l'état d'échec lors de la récupération des informations de l'utilisateur
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.message;
        }
      })
      // Réducteur pour gérer l'état réussi lors de la récupération des informations de l'utilisateur
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      // Réducteur pour gérer l'état de chargement lors de la mise à jour des informations de l'utilisateur
      .addCase(putUser.pending, (state) => {
        state.status = "loading";
      })
      // Réducteur pour gérer l'état d'échec lors de la mise à jour des informations de l'utilisateur
      .addCase(putUser.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload.message;
        }
      })
      // Réducteur pour gérer l'état réussi lors de la mise à jour des informations de l'utilisateur
      .addCase(putUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      });
  },
});

// Export des actions
export const { toggleEditing } = userStore.actions;
// Export du réducteur
export default userStore.reducer;
