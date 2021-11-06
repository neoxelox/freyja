import React, { Component } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { getPostPreview } from "../../../utils/get-post-preview";
import Icon from "../Icon/Icon";
import "./Post.scss";

interface Props {
    text: string;
    image: string;
    likeCount: number;
    commentCount: number;
    dayCount: number;
    name: string;
    flatID: string;
    isIncident: boolean;
    isAnchored: boolean;
    incidentState?: "solved" | "pending" | "approved" | "rejected" | "progress";
}

export default class Post extends Component<Props> {
    render(): JSX.Element {
        const { image, likeCount, commentCount, dayCount, name, flatID, isIncident, isAnchored, incidentState, text } = this.props;
        return (
            <Card className="post">
                {isAnchored && (
                    <div className="mt-1 ml-2 post-header">
                        <span className="anchor-text">Anclado</span>
                        <Icon icon="anchorIcon" size="xs" color="#6B7280" className="anchor-icon"></Icon>
                    </div>
                )}
                <div className="post-header mt-1">
                    <img src={image} className="avatar"></img>
                    <p className="username">{name}</p>
                    <p className="flat-id">{flatID}</p>
                    {isIncident && <Icon icon="incidentIcon" size="xs" color="#6B7280" className="incident-icon"></Icon>}
                    <p className="post-text">{getPostPreview(text)}</p>
                    {isIncident && incidentState === "solved" && <Badge className="incident-badge-solved">RESUELTA</Badge>}
                    {isIncident && incidentState === "pending" && <Badge className="incident-badge-pending">PENDIENTE DE APROVACIÓN</Badge>}
                    {isIncident && incidentState === "approved" && <Badge className="incident-badge-approved">ACEPTADA</Badge>}
                    {isIncident && incidentState === "rejected" && <Badge className="incident-badge-rejected">RECHAZADA</Badge>}
                    {isIncident && incidentState === "progress" && <Badge className="incident-badge-progess">EN PROGRESO</Badge>}
                </div>
                <div className="post-footer">
                    <Row>
                        <Col>
                            <Icon icon="commentIcon" size="xs" color="#6B7280" className="footer-icon"></Icon>
                            <p className="footer-text">{commentCount}</p>
                        </Col>
                        <Col>
                            {isIncident ? (
                                <Icon icon="upvoteIcon" size="xs" color="#6B7280" className="footer-icon"></Icon>
                            ) : (
                                <Icon icon="likeIcon" size="xs" color="#6B7280" className="footer-icon"></Icon>
                            )}
                            <p className="footer-text">{likeCount}</p>
                        </Col>
                        <Col>
                            <span className="footer-text">{dayCount} días</span>
                        </Col>
                    </Row>
                </div>
            </Card>
        );
    }
}
