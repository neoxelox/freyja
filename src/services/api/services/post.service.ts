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
import { GetCommentsResponse } from "../responses/post/get-comments.response";
import { GetHistoryResponse } from "../responses/post/get-history.response";
import { PostHistoryDto } from "../../model/post-history.dto";
import { UpdatePostRequest } from "../requests/post/update-post.request";
import { UpdatePostResponse } from "../responses/post/update-post.response";

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

    static async getComments(communityId: string, postId: string): Promise<PostDto[] | void> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<GetCommentsResponse>({
            method: "GET",
            path: "/v1/community/" + communityId + "/post/" + postId + "/thread",
        }).catch((e) => apiErrorHandler(e));
        store.dispatch(PostAction.setLoading(false));
        if (res) return res.thread;
    }

    static async getHistory(communityId: string, postId: string): Promise<PostHistoryDto[] | void> {
        store.dispatch(PostAction.setLoading(true));
        const res = await request<GetHistoryResponse>({
            method: "GET",
            path: "/v1/community/" + communityId + "/post/" + postId + "/history",
        }).catch((e) => apiErrorHandler(e));
        store.dispatch(PostAction.setLoading(false));
        if (res) return res.history;
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

    static async updateIssueState(communityId: string, postId: string, post: UpdatePostRequest): Promise<PostDto | void> {
        return await request<UpdatePostResponse>({
            method: "PUT",
            path: "/v1/community/" + communityId + "/post/" + postId,
            body: post,
        }).catch((e) => apiErrorHandler(e));
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
