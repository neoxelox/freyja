export interface CommunityDto {
    id: string;
    address: string;
    name?: string;
    categories: string[];
    pinned?: string;
    created_at: string;
    deleted_at: string;
}
