export interface PostHistoryDto {
    message: string;
    categories: string[];
    state?: "PENDING" | "IN PROGRESS" | "REJECTED" | "ACCEPTED" | "RESOLVED";
    media: string[];
    created_at: string;
}
