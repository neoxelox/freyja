import { TokenSecureStorage } from "../../storage/TokenSecureStorage";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";
import { appActions } from "../../../store/AppStore";
import { UserService } from "./user.service";
import { CommunityService } from "./community.service";

export class AppService {
    static async load(): Promise<void> {
        store.dispatch(appActions.setLoading(true));
        const token = await new TokenSecureStorage().getToken();
        if (token) {
            await this.refresh();
        }
        store.dispatch(appActions.setLoading(false));
    }

    static async refresh(): Promise<void> {
        await UserService.info();
        await CommunityService.load();
        await CommunityService.invitations();
        store.dispatch(authActions.setLoggedIn(true));
    }
}
