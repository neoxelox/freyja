export abstract class BaseStorage {
    async saveAsync(key: string, value: string): Promise<string | null> {
        localStorage.setItem(key, value);
        return value;
    }

    async retrieveAsync(key: string): Promise<string | null> {
        return localStorage.getItem(key);
    }

    async removeKey(key: string): Promise<void> {
        localStorage.removeItem(key);
    }
}
