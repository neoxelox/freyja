import React, { Component } from "react";
import { Badge, Card } from "react-bootstrap";
import { PostDto } from "../../../services/model/post.dto";
import { getPostPreview } from "../../../utils/get-post-preview";
import Icon from "../Icon/Icon";
import "../Post/Post.scss";
import { Link } from "react-router-dom";
import ProfileImage from "../ProfileImage/ProfileImage";
import IncidentBadge from "../IncidentBadge/IncidentBadge";
import PostFooter from "../Post/PostFooter/PostFooter";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

export default class StateUpdate extends Component<any> {
    render(): JSX.Element {
        const { id, image, name, flatID, createdAt, newState } = this.props;
        return (
            <Card className="post">
                <div className="mt-1">
                    <Row gap={10} alignItems="flex-start" justifyContent="flex-start" className="mb-2">
                        <ProfileImage image={image} role="SECRETARY" />
                        <Col gap={2}>
                            <Row gap={5}>
                                <p style={{ marginBottom: 0 }} className="username">
                                    {name}
                                </p>
                                <p style={{ marginBottom: 0 }} className="flat-id">
                                    {"· " + flatID}
                                </p>
                            </Row>
                            <Row>
                                <p style={{ marginBottom: 0 }} className="flat-id">
                                    {createdAt}
                                </p>
                            </Row>
                            <div>
                                <p className="post-text">{getPostPreview(`${name} actualizó el estado a: `)}</p>
                                <IncidentBadge state={newState} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        );
    }
}
