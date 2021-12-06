import { LoginStartRequest } from "../requests/auth/login-start.request";
import { LoginStartResponse } from "../responses/auth/login-start.response";
import { request } from "../core/request";
import { LoginEndRequest } from "../requests/auth/login-end.request";
import { LoginEndResponse } from "../responses/auth/login-end.response";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";
import { userActions } from "../../../store/UserStore";
import { TokenSecureStorage } from "../../storage/TokenSecureStorage";
import { apiErrorHandler } from "../../../utils/api-error-handler";
import { AppService } from "./app.service";
import { UserDto } from "../../model/user.dto";
import { appActions } from "../../../store/AppStore";

export class AuthService {
    static async loginStart(phone: string): Promise<boolean> {
        const req: LoginStartRequest = { phone };
        store.dispatch(authActions.setLoading(true));
        const res = await request<LoginStartResponse>({ method: "POST", path: "/login/start", body: req }).catch((e) =>
            apiErrorHandler(e, undefined, [{ code: "ERR_OTP_ALREADY_SENT" }]),
        );
        if (res) store.dispatch(authActions.setCodeId(res.id));
        store.dispatch(authActions.setLoading(false));
        return !!res;
    }

    static async loginEnd(code: string): Promise<boolean | UserDto> {
        const req: LoginEndRequest = { id: store.getState().auth.codeId, code };
        store.dispatch(authActions.setLoading(true));
        const res = await request<LoginEndResponse>({ method: "POST", path: "/login/end", body: req }).catch((e) => apiErrorHandler(e));
        if (res) {
            const { access_token, user } = res;
            await new TokenSecureStorage().saveToken(access_token);

            if (user) {
                await AppService.refresh();
            }
        }
        store.dispatch(authActions.setLoading(false));
        return !!res;
    }

    static async logout(): Promise<void> {
        await new TokenSecureStorage().clear();
        store.dispatch(authActions.setLoggedIn(false));
        store.dispatch(userActions.setInfo(undefined));
        store.dispatch(appActions.setLoading(true));
        window.location.replace("/auth");
    }
}
