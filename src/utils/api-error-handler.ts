import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { ApiErrors } from "../services/api/api.errors";
import { AuthService } from "../services/api/services/auth.service";

export interface ApiRequestError {
    code: string;
    message?: string;
}

export interface ErrorHandler {
    error: string;
    message: string;
}

export async function apiErrorHandler(
    e: AxiosError,
    errorDic: Record<string, string> = ApiErrors,
    ignore?: ApiRequestError[],
): Promise<void> {
    const axiosError = e as AxiosError;
    const error: ApiRequestError = axiosError?.response?.data || {
        code: axiosError?.response?.status || 500,
        message: axiosError?.response?.statusText,
    };

    if (e.response?.status === 401) {
        await AuthService.logout();
        toast.error("La sesión ha expirado", { position: "top-center" });
    } else if (!ignore || !ignore.some((ie: ApiRequestError) => error.code === ie.code && (!ie.message || error.message === ie.message))) {
        toast.error(errorDic[error.code] || "No se ha podido conectar con el servidor", { position: "top-center" });
    }
}
