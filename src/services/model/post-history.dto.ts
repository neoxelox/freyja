export interface PostHistoryDto {
    updator_id: string;
    message: string;
    categories: string[];
    state?: "PENDING" | "IN PROGRESS" | "REJECTED" | "ACCEPTED" | "RESOLVED";
    media: string[];
    created_at: string;
}
