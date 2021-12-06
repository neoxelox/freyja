import { store } from "../../../store";
import { IssueFilter, PostAction } from "../../../store/PostStore";
import { IssueOrder as StoreIssueOrder } from "../../../store/PostStore";
import { request } from "../core/request";
import { ListPostsResponse } from "../responses/post/list-posts.response";
import { apiErrorHandler } from "../../../utils/api-error-handler";
import { PostDto } from "../../model/post.dto";
import { CreatePostRequest } from "../requests/post/create-post.request";
import { CreatePostResponse } from "../responses/post/create-post.response";
import { GetPostResponse } from "../responses/post/get-post.response";
import { VotePostResponse } from "../responses/post/vote-post.response";

export type IssueOrder = "date" | "priority" | undefined;
export type OrderType = "asc" | "desc";

export class PostService {
    static setIssuesOrder(order: IssueOrder, type: OrderType): void {
        if (order) store.dispatch(PostAction.setOrder((order + "-" + type) as StoreIssueOrder));
    }

    static resetIssuesOrder(): void {
        store.dispatch(PostAction.setOrder(undefined));
    }

    static setIssuesFilter(filter: IssueFilter): void {
        store.dispatch(PostAction.setFilter(filter));
    }

    static resetIssuesFilter(): void {
        store.dispatch(PostAction.setFilter(undefined));
    }

    static async getPosts(communityId: string): Promise<void> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<ListPostsResponse>({ method: "GET", path: "/v1/community/" + communityId + "/post" }).catch((e) =>
            apiErrorHandler(e),
        );
        if (res) store.dispatch(PostAction.setPosts(res.posts));
        store.dispatch(PostAction.setLoading(false));
    }

    static async getPost(communityId: string, postId: string): Promise<PostDto | void> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<GetPostResponse>({ method: "GET", path: "/v1/community/" + communityId + "/post/" + postId }).catch((e) =>
            apiErrorHandler(e),
        );
        store.dispatch(PostAction.setLoading(false));
        return res;
    }

    static async createPost(communityId: string, post: CreatePostRequest): Promise<boolean> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<CreatePostResponse>({ method: "POST", path: "/v1/community/" + communityId + "/post", body: post }).catch(
            (e) => apiErrorHandler(e),
        );
        store.dispatch(PostAction.setLoading(false));
        return !!res;
    }

    static async votePost(communityId: string, postId: string): Promise<PostDto | void> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<VotePostResponse>({
            method: "POST",
            path: "/v1/community/" + communityId + "/post/" + postId + "/vote",
        }).catch((e) => apiErrorHandler(e));
        if (res) store.dispatch(PostAction.setPost(res));
        store.dispatch(PostAction.setLoading(false));
        return res;
    }

    static async unvotePost(communityId: string, postId: string): Promise<PostDto | void> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<VotePostResponse>({
            method: "POST",
            path: "/v1/community/" + communityId + "/post/" + postId + "/unvote",
        }).catch((e) => apiErrorHandler(e));
        if (res) store.dispatch(PostAction.setPost(res));
        store.dispatch(PostAction.setLoading(false));
        return res;
    }
}
