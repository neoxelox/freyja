export interface InvitationDto {
    id: string;
    phone: string;
    community_id: string;
    door: string;
    role: "ADMINISTRATOR" | "PRESIDENT" | "SECRETARY" | "RESIDENT" | "LESSEE";
    created_at: string;
}
