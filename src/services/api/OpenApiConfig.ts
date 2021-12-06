import { TokenSecureStorage } from "../storage/TokenSecureStorage";
import { OpenAPI } from "./core/OpenAPI";

OpenAPI.TOKEN = async () => (await new TokenSecureStorage().getToken()) || "";
OpenAPI.BASE = process.env.FREYJA_ODIN_BASE_URL || "";
