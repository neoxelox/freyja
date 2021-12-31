import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    loading: boolean;
    secretCount: number;
}

const initialState: AppState = {
    loading: true,
    secretCount: 0,
};

const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
        incrementSecretCount: (state) => {
            state.secretCount += 1;
            return state;
        },
    },
});

export const appActions = AppSlice.actions;
export default AppSlice.reducer;
