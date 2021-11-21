import { LoginStartRequest } from "../requests/auth/login-start.request";
import { LoginStartResponse } from "../responses/auth/login-start.response";
import { request } from "../core/request";
import { LoginEndRequest } from "../requests/auth/login-end.request";
import { LoginEndResponse } from "../responses/auth/login-end.response";

export class AuthService {
    static async loginStart(req: LoginStartRequest): Promise<LoginStartResponse> {
        return request({ method: "POST", path: "/login/start", body: req });
    }

    static async loginEnd(req: LoginEndRequest): Promise<LoginEndResponse> {
        return request({ method: "POST", path: "/login/end", body: req });
    }
}
