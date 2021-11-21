export interface InvitationDto {
    id: string;
    phone: string;
    community: string;
    state: "PENDING" | "ACCEPTED" | "REJECTED";
    door?: string;
    role: "ADMINISTRATOR" | "PRESIDENT" | "SECRETARY" | "RESIDENT" | "LESSEE";
    created_at: string;
    reminded_at: string;
    expires_at: string;
}
