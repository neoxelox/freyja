/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { TokenSecureStorage } from '../../storage/TokenSecureStorage';
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

type Config = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
}

export const ApiOptions: Config = {
    BASE: process.env.BACKEND_URL || "",
    VERSION: '0.0.0',
    WITH_CREDENTIALS: false,
    TOKEN: async () => (await new TokenSecureStorage().getToken()) || "",
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
};