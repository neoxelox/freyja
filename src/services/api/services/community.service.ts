import { store } from "../../../store";
import { communityActions } from "../../../store/CommunityStore";
import { request } from "../core/request";
import { ListCommunitiesResponse } from "../responses/community/list-communities.response";
import { apiErrorHandler } from "../../../utils/api-error-handler";
import { ListInvitationsResponseDto } from "../responses/invitation/list-invitations.response.dto";
import { toast } from "react-hot-toast";
import { CommunityDto } from "../../model/community.dto";
import { GetCommunityResponse } from "../responses/community/get-community.response";

export class CommunityService {
    static async load(): Promise<void> {
        store.dispatch(communityActions.setLoading(true));
        const res = await request<ListCommunitiesResponse>({ method: "GET", path: "/v1/community" }).catch((e) => apiErrorHandler(e));
        if (res) {
            store.dispatch(communityActions.setCommunities(res.communities));
            if (res.communities.length) store.dispatch(communityActions.setActiveCommunity(0));
        }
        store.dispatch(communityActions.setLoading(false));
    }

    static async getCommunity(id: string): Promise<CommunityDto | void> {
        const res = await request<GetCommunityResponse>({ method: "GET", path: "/v1/community/" + id }).catch((e) => apiErrorHandler(e));
        return res ? res.community : undefined;
    }

    static async invitations(): Promise<void> {
        store.dispatch(communityActions.setLoading(true));
        const res = await request<ListInvitationsResponseDto>({ method: "GET", path: "/v1/invitation" }).catch((e) => apiErrorHandler(e));
        if (res) {
            store.dispatch(communityActions.setInvitations(res.invitations));
            if (res.invitations.length) toast("Tienes nuevas invitaciones", { id: "Tienes nuevas invitaciones" });
        }
        store.dispatch(communityActions.setLoading(false));
    }

    static async acceptInvitation(id: string): Promise<boolean> {
        store.dispatch(communityActions.setLoading(true));
        const res = await request<ListInvitationsResponseDto>({ method: "POST", path: "/v1/invitation/" + id + "/accept" }).catch(() =>
            toast.error("Ha habido un error aceptando la invitación", { id: "Ha habido un error aceptando la invitación" }),
        );
        store.dispatch(communityActions.setLoading(false));
        return !!res;
    }

    static async rejectInvitation(id: string): Promise<boolean> {
        store.dispatch(communityActions.setLoading(true));
        const res = await request<ListInvitationsResponseDto>({ method: "POST", path: "/v1/invitation/" + id + "/reject" }).catch(() =>
            toast.error("Ha habido un error denegando la invitación", { id: "Ha habido un error denegando la invitación" }),
        );
        store.dispatch(communityActions.setLoading(false));
        return !!res;
    }
}
