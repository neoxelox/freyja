import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { PostDto } from "../../../services/model/post.dto";
import { Col } from "../../atom/Col/Col";
import Icon from "../../atom/Icon/Icon";
import IncidentBadge from "../../atom/IncidentBadge/IncidentBadge";
import PostFooter from "../../atom/Post/PostFooter/PostFooter";
import ProfileImage from "../../atom/ProfileImage/ProfileImage";
import { Row } from "../../atom/Row/Row";
import "./PostView.scss";

type Props = Partial<PostDto>;

export default class PostView extends Component<any> {
    render(): JSX.Element {
        const { image, name, flatID, isIncident, text, incidentState, commentCount, likeCount, dayCount } = this.props;

        return (
            <Card className="post-view">
                <div className="mt-1">
                    <Row gap={10} alignItems="center" justifyContent="flex-start" className="mb-2">
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
                            <p style={{ marginBottom: 0 }} className="role">
                                Secretary (HARDCODED)
                            </p>
                        </Col>
                    </Row>

                    <Col gap={10}>
                        <div>{text}</div>
                        <div className="post-date">13:31 PM · Oct 10, 2021 (HARDCODED)</div>
                        {isIncident && <IncidentBadge state={incidentState} />}
                        <PostFooter isIncident={isIncident} commentCount={commentCount} likeCount={likeCount} dayCount={dayCount} />
                    </Col>
                    {isIncident && <Icon icon="incidentIcon" size="xs" color="#6B7280" className="incident-icon"></Icon>}
                </div>
            </Card>
        );
    }
}
