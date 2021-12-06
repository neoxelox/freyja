import { TokenSecureStorage } from "../../storage/TokenSecureStorage";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";
import { appActions } from "../../../store/AppStore";
import { UserService } from "./user.service";
import { CommunityService } from "./community.service";
import { PostService } from "./post.service";
import { selectCommunity } from "../../../store/CommunityStore";

export class AppService {
    static async load(): Promise<void> {
        store.dispatch(appActions.setLoading(true));
        const token = await new TokenSecureStorage().getToken();
        if (token) {
            await this.refresh();
        }
        await new Promise((resolve) => setTimeout(() => resolve(null), 2000));
        store.dispatch(appActions.setLoading(false));
    }

    static async refresh(): Promise<void> {
        await UserService.info();
        await CommunityService.load();
        await CommunityService.invitations();
        store.dispatch(authActions.setLoggedIn(true));
    }

    static setPostPoller(): void {
        const state = store.getState();
        const communityId = selectCommunity(state.community)?.community?.id;
        setInterval(() => PostService.getPosts(communityId), 8000);
    }

    static async setLoadingTimeout(): Promise<void> {
        store.dispatch(appActions.setLoading(true));
        await new Promise((resolve) => setTimeout(() => resolve(null), 2000));
        store.dispatch(appActions.setLoading(false));
    }
}
