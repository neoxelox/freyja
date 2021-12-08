import { InvitationDto } from "../services/model/invitation.dto";

export function role(role: InvitationDto["role"]): string {
    if (role === "ADMINISTRATOR") return "Administrador/a";
    else if (role === "SECRETARY") return "Secretario/a";
    else if (role === "LESSEE") return "Alquilado/a";
    else if (role === "PRESIDENT") return "Presidente/a";
    else if (role === "RESIDENT") return "Vecino/a";
}
