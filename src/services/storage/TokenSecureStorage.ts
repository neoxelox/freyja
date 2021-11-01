import { BaseStorage } from "./BaseSecureStorage";

export class TokenSecureStorage extends BaseStorage {
    TOKEN_STORAGE_KEY = "auth_token";

    async saveToken(token: string): Promise<string | null> {
        return this.saveAsync(this.TOKEN_STORAGE_KEY, token);
    }

    async getToken(): Promise<string | null> {
        return this.retrieveAsync(this.TOKEN_STORAGE_KEY);
    }

    async clear(): Promise<void> {
        return this.removeKey(this.TOKEN_STORAGE_KEY);
    }
}
