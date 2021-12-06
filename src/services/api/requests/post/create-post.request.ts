import { PostDto } from "../../../model/post.dto";

export interface CreatePostRequest {
    type: PostDto["type"];
    thread_id?: string;
    priority?: PostDto["priority"];
    recipient_ids?: PostDto["recipient_ids"];
    message: PostDto["message"];
    categories?: PostDto["categories"];
    media?: PostDto["media"];
}
