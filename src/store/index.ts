import { configureStore } from "@reduxjs/toolkit";
import AuthStore from "./AuthStore";

export const store = configureStore({
    reducer: {
        auth: AuthStore,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
// export const dispatch = useAppDispatch();
