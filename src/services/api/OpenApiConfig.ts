import { TokenSecureStorage } from "../storage/TokenSecureStorage";
import { OpenAPI } from "./core/OpenAPI";

OpenAPI.TOKEN = async () => (await new TokenSecureStorage().getToken()) || "";
OpenAPI.BASE = process.env.REACT_APP_FREYJA_ODIN_BASE_URL || "";
