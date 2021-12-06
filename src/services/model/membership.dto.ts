export interface MembershipDto {
    id: string;
    user_id: string;
    community_id: string;
    door?: string;
    role: "ADMINISTRATOR" | "PRESIDENT" | "SECRETARY" | "RESIDENT" | "LESSEE";
    created_at: string;
}
