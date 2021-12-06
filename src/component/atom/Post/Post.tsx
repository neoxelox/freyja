import React, { Component } from "react";
import { Card } from "react-bootstrap";
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
import { UserDto } from "../../../services/model/user.dto";
import { MembershipDto } from "../../../services/model/membership.dto";
import { CommunityService } from "../../../services/api/services/community.service";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";

interface Props {
    post: PostDto;
    communityId: string;
    isAnchored?: boolean;
    onVote?: (post: PostDto) => any;
}

interface State {
    user: UserDto | undefined;
    membership: MembershipDto | undefined;
}

class Post extends Component<Props, State> {
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
        const { post, isAnchored, onVote } = this.props;
        const { user, membership } = this.state;
        const isIncident = post.type === "ISSUE";
        return (
            <Link to={(isIncident ? "/issue/" : "/post/") + post.id}>
                <Card className="post">
                    {isAnchored && (
                        <div className="post-header">
                            <span className="anchor-text">Anclado</span>
                            <Icon icon="anchorIcon" size="xs" color="#6B7280" className="anchor-icon" />
                        </div>
                    )}
                    <div className="mt-1">
                        <Row gap={10} alignItems="flex-start" justifyContent="flex-start" className="mb-2">
                            <ProfileImage image={user?.picture} role={membership?.role} />
                            <Col gap={2}>
                                <Row gap={5}>
                                    <p style={{ marginBottom: 0 }} className="username">
                                        {user?.name}
                                    </p>
                                    <p style={{ marginBottom: 0 }} className="flat-id">
                                        {"· " + membership?.door}
                                    </p>
                                </Row>
                                <Col gap={10}>
                                    <p className="post-text">{getPostPreview(post.message)}</p>
                                    {isIncident && <IncidentBadge state={post.state} />}
                                    <PostFooter post={post} onVote={(val) => onVote(val)} />
                                </Col>
                            </Col>
                        </Row>
                        {isIncident && <Icon icon="incidentIcon" size="xs" color="#6B7280" className="incident-icon" />}
                    </div>
                </Card>
            </Link>
        );
    }
}

export default connect((state: RootState) => ({
    communityId: selectCommunity(state.community).community.id,
}))(Post);
