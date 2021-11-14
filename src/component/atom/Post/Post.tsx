import React, { Component } from "react";
import { Badge, Card } from "react-bootstrap";
import { PostDto } from "../../../services/model/post.dto";
import { getPostPreview } from "../../../utils/get-post-preview";
import Icon from "../Icon/Icon";
import "./Post.scss";
import { Link } from "react-router-dom";
import ProfileImage from "../ProfileImage/ProfileImage";
import IncidentBadge from "../IncidentBadge/IncidentBadge";
import PostFooter from "./PostFooter/PostFooter";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

export default class Post extends Component<PostDto> {
    render(): JSX.Element {
        const { id, image, likeCount, commentCount, dayCount, name, flatID, isIncident, isAnchored, incidentState, text } = this.props;
        return (
            <Link to={(isIncident ? "/issue/" : "/post/") + id}>
                <Card className="post">
                    {isAnchored && (
                        <div className="post-header">
                            <span className="anchor-text">Anclado</span>
                            <Icon icon="anchorIcon" size="xs" color="#6B7280" className="anchor-icon"></Icon>
                        </div>
                    )}
                    <div className="post-header mt-1">
                        <Row gap={10} alignItems="flex-start" justifyContent="flex-start" className="mb-2">
                            <ProfileImage image={image} role="SECRETARY" />

                            <Col>
                                <Row gap={5}>
                                    <p style={{ marginBottom: 0 }} className="username">
                                        {name}
                                    </p>
                                    <p style={{ marginBottom: 0 }} className="flat-id">
                                        {"· " + flatID}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                        {isIncident && <Icon icon="incidentIcon" size="xs" color="#6B7280" className="incident-icon"></Icon>}
                        <p className="post-text">{getPostPreview(text)}</p>
                        {isIncident && <IncidentBadge state={incidentState} />}
                    </div>
                    <div className="post-footer-wrapper">
                        <PostFooter commentCount={commentCount} likeCount={likeCount} dayCount={dayCount} isIncident={isIncident} />
                    </div>
                </Card>
            </Link>
        );
    }
}
