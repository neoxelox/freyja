import { TokenSecureStorage } from "../../storage/TokenSecureStorage";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";
import { appActions } from "../../../store/AppStore";
import { UserService } from "./user.service";

export class AppService {
    static async load(): Promise<void> {
        store.dispatch(appActions.setLoading(true));
        const token = await new TokenSecureStorage().getToken();
        if (token) {
            store.dispatch(authActions.setLoggedIn(true));
            await UserService.info();
        }
        store.dispatch(appActions.setLoading(false));
    }
}
