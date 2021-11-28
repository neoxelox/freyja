import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    loggedIn: boolean;
    codeId: string | undefined;
    code: string;
}

const initialState: AuthState = {
    loading: false,
    loggedIn: false,
    codeId: undefined,
    code: "",
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state, { payload }: PayloadAction<boolean>) => {
            state.loggedIn = payload;
            return state;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
        setCodeId: (state, { payload }: PayloadAction<string>) => {
            state.codeId = payload;
            return state;
        },
        setCode: (state, { payload }: PayloadAction<string>) => {
            state.code = payload;
            return state;
        },
    },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
