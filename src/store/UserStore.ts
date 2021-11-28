import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "../services/model/user.dto";

interface UserState {
    info?: UserDto;
    register: {
        phone: string;
        name: string;
        surname: string;
        email: string;
        birthday: string;
    };
    emailTokenId?: string;
    loading: boolean;
}

const initialState: UserState = {
    register: {
        phone: "",
        name: "",
        surname: "",
        email: "",
        birthday: "",
    },
    loading: false,
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setInfo: (state, { payload }: PayloadAction<Partial<UserDto>>) => {
            state.info = { ...state.info, ...payload };
            return state;
        },
        setEmailTokenId: (state, { payload }: PayloadAction<string>) => {
            state.emailTokenId = payload;
            return state;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
    },
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;
