export interface PostDto {
    id: string;
    text: string;
    image: string;
    likeCount: number;
    commentCount: number;
    dayCount: number;
    name: string;
    flatID: string;
    isIncident?: boolean;
    type: "POST" | "ISSUE";
    isAnchored: boolean;
    incidentState?: "solved" | "pending" | "approved" | "rejected" | "progress";
}
