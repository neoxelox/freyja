import { RootStoreState } from "./RootStore";
import { StoreActionParam } from "./index";

export type AuthStoreState = {
    isLoggedIn: boolean;
    token: string;
};

export enum AuthActionType {
    LOG_IN = "auth/LOG_IN",
}

export default {
    namespace: "auth",
    state: {
        isLoggedIn: false,
        token: "",
    },
    mutations: {
        setIsLoggedIn(state: RootStoreState, payload: boolean): RootStoreState {
            state.auth.isLoggedIn = payload;
            return state;
        },
        setToken(state: RootStoreState, payload: string): RootStoreState {
            state.auth.token = payload;
            return state;
        },
    },
    actions: {
        LOG_IN: async ({ commit, dispatchAction }: StoreActionParam, payload: any): Promise<void> => {
            /* const value = (await AuthenticateService.authControllerLogin({
                email: payload.email,
                password: payload.password,
            })) as AuthCredentialsDto;
            commit({ type: "auth/setIsLoggedIn", payload: true });
            commit({ type: "auth/setToken", payload: value.access_token }); */
        },
    },
};
