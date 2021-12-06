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
import { formatDate } from "../../../utils/format-date";
import { UserDto } from "../../../services/model/user.dto";
import { MembershipDto } from "../../../services/model/membership.dto";
import { CommunityService } from "../../../services/api/services/community.service";
import { role } from "../../../utils/role";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";

interface Props {
    post: PostDto;
    communityId: string;
    onVote: (post: PostDto) => any;
}

interface State {
    user: UserDto | undefined;
    membership: MembershipDto | undefined;
}

class PostView extends Component<Props, State> {
    state: State = {
        user: undefined,
        membership: undefined,
    };

    async componentDidMount(): Promise<void> {
        const { post, communityId } = this.props;

        const res = await CommunityService.getUserAndMembership(communityId, post.creator_id);
        if (res) {
            const { user, membership } = res;
            this.setState({ user, membership });
        }
    }

    render(): JSX.Element {
        const { post, onVote } = this.props;
        const { user, membership } = this.state;
        const isIncident = post.type === "ISSUE";

        return (
            <Card className="post-view">
                <div className="mt-1">
                    <Row gap={10} alignItems="center" justifyContent="flex-start" className="mb-2">
                        <ProfileImage image={user?.picture} role={membership?.role} />

                        <Col>
                            <Row gap={5}>
                                <p style={{ marginBottom: 0 }} className="username">
                                    {user?.name}
                                </p>
                                <p style={{ marginBottom: 0 }} className="flat-id">
                                    {"· " + membership?.door}
                                </p>
                            </Row>
                            <p style={{ marginBottom: 0 }} className="role">
                                {membership ? role(membership.role) : ""}
                            </p>
                        </Col>
                    </Row>

                    <Col gap={10}>
                        <div>{post.message}</div>
                        <div className="post-date">{formatDate(new Date(post.created_at))}</div>
                        {isIncident && <IncidentBadge state={post.state} />}
                        <PostFooter post={post} onVote={(val) => onVote(val)} />
                    </Col>
                    {isIncident && <Icon icon="incidentIcon" size="xs" color="#6B7280" className="incident-icon" />}
                </div>
            </Card>
        );
    }
}

export default connect((state: RootState) => ({
    communityId: selectCommunity(state.community).community.id,
}))(PostView);
