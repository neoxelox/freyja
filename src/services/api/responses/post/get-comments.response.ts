import { PostDto } from "../../../model/post.dto";

export interface GetCommentsResponse {
    thread: PostDto[];
}
