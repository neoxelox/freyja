import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileState {
    loading: boolean;
}

const initialState: FileState = {
    loading: false,
};

const FileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
    },
});

export const fileActions = FileSlice.actions;
export default FileSlice.reducer;
