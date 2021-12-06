import { CommunityDto } from "./community.dto";
import { MembershipDto } from "./membership.dto";

export type CommunityAndMembershipDto = {
    community: CommunityDto;
    membership: MembershipDto;
};
