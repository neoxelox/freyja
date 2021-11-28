import { UserDto } from "../../../model/user.dto";

export interface LoginEndResponse {
    access_token: string;
    user: UserDto | null;
}
