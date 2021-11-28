import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    loading: boolean;
}

const initialState: AppState = {
    loading: true,
};

const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
    },
});

export const appActions = AppSlice.actions;
export default AppSlice.reducer;
