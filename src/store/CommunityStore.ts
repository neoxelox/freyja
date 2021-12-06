import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InvitationDto } from "../services/model/invitation.dto";
import { CommunityAndMembershipDto } from "../services/model/community-and-membership.dto";

interface CommunityState {
    communities: CommunityAndMembershipDto[];
    activeCommunity: number | undefined;
    invitations: InvitationDto[];
    loading: boolean;
}

const initialState: CommunityState = {
    communities: [],
    activeCommunity: undefined,
    invitations: [],
    loading: false,
};

const CommunitySlice = createSlice({
    name: "community",
    initialState,
    reducers: {
        setCommunities: (state, { payload }: PayloadAction<Partial<CommunityAndMembershipDto[]>>) => {
            state.communities = payload;
            return state;
        },
        setActiveCommunity: (state, { payload }: PayloadAction<number>) => {
            state.activeCommunity = payload;
            return state;
        },
        setInvitations: (state, { payload }: PayloadAction<Partial<InvitationDto[]>>) => {
            state.invitations = payload;
            return state;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
    },
});

export const selectCommunity = (state: CommunityState) => state.communities[state.activeCommunity];

export const communityActions = CommunitySlice.actions;
export default CommunitySlice.reducer;
