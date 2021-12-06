import { PostHistoryDto } from "./post-history.dto";

export interface PostDto extends PostHistoryDto {
    id: string;
    thread_id: string;
    creator_id: string;
    type: "PUBLICATION" | "ISSUE" | "EVENT";
    priority?: number;
    recipient_ids?: string[];
    voter_ids: string[];
    created_at: string;
}
