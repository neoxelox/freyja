import { configureStore } from "@reduxjs/toolkit";
import AuthStore from "./AuthStore";
import UserStore from "./UserStore";
import AppStore from "./AppStore";
import FileStore from "./FileStore";
import PostStore from "./PostStore";
import CommunityStore from "./CommunityStore";

export const store = configureStore({
    reducer: {
        app: AppStore,
        auth: AuthStore,
        user: UserStore,
        file: FileStore,
        post: PostStore,
        community: CommunityStore,
    },
});

export type RootState = ReturnType<typeof store.getState>;
