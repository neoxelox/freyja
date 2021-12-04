import { UpdateRequest } from "../requests/user/update.request";
import { store } from "../../../store";
import { userActions } from "../../../store/UserStore";
import { request } from "../core/request";
import { UpdateResponse } from "../responses/user/update.response";
import { UpdateEmailStartRequest } from "../requests/user/update-email-start.request";
import { UpdateEmailStartResponse } from "../responses/user/update-email-start.response";
import { UpdateEmailEndRequest } from "../requests/user/update-email-end.request";
import { UpdateEmailEndResponse } from "../responses/user/update-email-end.response";
import { apiErrorHandler } from "../../../utils/api-error-handler";
import { UserDto } from "../../model/user.dto";

export class UserService {
    static async update(info: UpdateRequest): Promise<boolean> {
        store.dispatch(userActions.setLoading(true));
        const res = await request<UpdateResponse>({ method: "POST", path: "/v1/user/profile", body: info }).catch((e) =>
            apiErrorHandler(e),
        );
        if (res) store.dispatch(userActions.setInfo(res));
        store.dispatch(userActions.setLoading(false));
        return !!res;
    }

    static async updateEmailStart(email: string): Promise<boolean> {
        store.dispatch(userActions.setLoading(true));
        const res = await request<UpdateEmailStartResponse>({
            method: "POST",
            path: "/v1/user/email/start",
            body: { email } as UpdateEmailStartRequest,
        }).catch((e) => apiErrorHandler(e, undefined, [{ code: "ERR_OTP_ALREADY_SEND" }]));
        if (res) store.dispatch(userActions.setEmailTokenId(res.id));
        store.dispatch(userActions.setLoading(false));
        return !!res;
    }

    static async updateEmailEnd(code: string): Promise<boolean> {
        const req: UpdateEmailEndRequest = { id: store.getState().user.emailTokenId, code };
        store.dispatch(userActions.setLoading(true));
        const res = await request<UpdateEmailEndResponse>({ method: "POST", path: "/v1/user/email/end", body: req }).catch((e) =>
            apiErrorHandler(e),
        );
        if (res) store.dispatch(userActions.setInfo({ email: res.email }));
        store.dispatch(userActions.setLoading(false));
        return !!res;
    }

    static async info(): Promise<void> {
        const res = await request<UserDto>({ method: "GET", path: "/v1/user/profile" }).catch((e) => apiErrorHandler(e));
        if (res) store.dispatch(userActions.setInfo(res));
    }
}
