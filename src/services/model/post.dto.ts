export interface PostDto {
    id: string;
    thread: string;
    creator: string;
    type: "PUBLICATION" | "ISSUE" | "EVENT";
    priority?: number;
    recipients?: string[];
    voters?: string[];
    message: string;
    categories?: string[];
    state?: "PENDING" | "IN PROGRESS" | "REJECTED" | "ACCEOTED" | "RESOLVED";
    widjets?: Object;
    media?: Object;
    created_at: string;
}
