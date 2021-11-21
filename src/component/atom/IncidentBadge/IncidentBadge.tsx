import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { PostDto } from "../../../services/model/post.dto";
import "./IncidentBadge.scss";

interface Props {
    state: PostDto["incidentState"];
}

export default class IncidentBadge extends Component<Props> {
    getBadgeBgAndText(): { bg: string; text: string } {
        switch (this.props.state) {
            case "solved":
                return {
                    bg: "success",
                    text: "RESUELTA",
                };
            case "pending":
                return {
                    bg: "secondary",
                    text: "PENDIENTE DE APROVACIÓN",
                };
            case "approved":
                return {
                    bg: "info",
                    text: "ACEPTADA",
                };
            case "rejected":
                return {
                    bg: "danger",
                    text: "RECHAZADA",
                };
            case "progress":
            default:
                return {
                    bg: "warning",
                    text: "EN PROGRESO",
                };
        }
    }

    render(): JSX.Element {
        const { bg, text } = this.getBadgeBgAndText();

        return (
            <Badge bg={bg} className="incident-badge">
                {text}
            </Badge>
        );
    }
}
