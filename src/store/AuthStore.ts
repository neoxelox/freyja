import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    loggedIn: boolean;
    phone: string;
    name: string;
    surname: string;
    email: string;
    birthday: string;
    code: string;
}

const initialState: AuthState = {
    loading: false,
    loggedIn: false,
    phone: "",
    name: "",
    surname: "",
    email: "",
    birthday: "",
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
        setPhone: (state, { payload }: PayloadAction<string>) => {
            state.phone = payload;
            return state;
        },
        setName: (state, { payload }: PayloadAction<string>) => {
            state.name = payload;
            return state;
        },
        setSurname: (state, { payload }: PayloadAction<string>) => {
            state.surname = payload;
            return state;
        },
        setEmail: (state, { payload }: PayloadAction<string>) => {
            state.email = payload;
            return state;
        },
        setBirthday: (state, { payload }: PayloadAction<string>) => {
            state.birthday = payload;
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
