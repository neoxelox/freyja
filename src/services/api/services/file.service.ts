import { store } from "../../../store";
import { fileActions } from "../../../store/FileStore";
import { request } from "../core/request";
import { UploadFileResponse } from "../responses/file/upload-file.response";
import { apiErrorHandler } from "../../../utils/api-error-handler";

export class FileService {
    static async updateFile(file: File): Promise<string | null> {
        store.dispatch(fileActions.setLoading(true));
        const res = await request<UploadFileResponse>({
            method: "POST",
            path: `/file`,
            formData: {
                file,
            },
        }).catch((e) => apiErrorHandler(e));
        store.dispatch(fileActions.setLoading(false));
        if (res) return res.url;
        else return null;
    }
}
