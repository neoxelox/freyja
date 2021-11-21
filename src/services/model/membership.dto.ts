export interface MembershipDto {
    id: string;
    user: string;
    community: string;
    door?: string;
    role: "ADMINISTRATOR" | "PRESIDENT" | "SECRETARY" | "RESIDENT" | "LESSEE";
    created_at: string;
    deleted_at?: string;
}
