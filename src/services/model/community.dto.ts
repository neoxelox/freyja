export interface CommunityDto {
    id: string;
    address: string;
    name?: string;
    categories: string[];
    pinned_ids: string[];
    created_at: string;
}
