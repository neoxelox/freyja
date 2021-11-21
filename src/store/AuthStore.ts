import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    loggedIn: boolean;
}

const initialState: AuthState = {
    loading: false,
    loggedIn: false,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
            return state;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            return state;
        },
    },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
