import { UserDto } from "../../../model/user.dto";
import { MembershipDto } from "../../../model/membership.dto";

export interface GetUserAndMembershipResponse {
    user: UserDto;
    membership: MembershipDto;
}
