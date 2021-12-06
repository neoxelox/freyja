import { InvitationDto } from "../services/model/invitation.dto";

export function role(role: InvitationDto["role"]): string {
    if (role === "ADMINISTRATOR") return "Administrador";
    else if (role === "SECRETARY") return "Secretario";
    else if (role === "LESSEE") return "Alquilado";
    else if (role === "PRESIDENT") return "Presidente";
    else if (role === "RESIDENT") return "Vecino";
}
