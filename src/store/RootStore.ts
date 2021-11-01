import AuthStore, { AuthStoreState } from "./AuthStore";
import { RootModulesType } from "./index";

export type RootStoreState = {
    //example: ExampleStoreState
    auth: AuthStoreState;
};

export const RootModules: RootModulesType = {
    //example: ExampleStore
    auth: AuthStore,
};

export type Actions = any; // | ExampleActionType;
