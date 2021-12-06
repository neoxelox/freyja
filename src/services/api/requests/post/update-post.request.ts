import { PostDto } from "../../../model/post.dto";

export interface UpdatePostRequest {
    message?: PostDto["message"];
    categories?: PostDto["categories"];
    state?: PostDto["state"];
    media?: PostDto["media"];
}
