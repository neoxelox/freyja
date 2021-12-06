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
import Button from "../../atom/Button/Button";
import { classNames } from "@agustinmj/class-names";
import PostComments from "./PostComments/PostComments";
import PostHistory from "./PostHistory/PostHistory";
import { UserService } from "../../../services/api/services/user.service";
import UpdateHistory from "../UpdateHistory/UpdateHistory";

interface Props {
    post: PostDto;
    communityId: string;
    role: MembershipDto["role"];
    onVote: (post: PostDto) => any;
    onUpdate: () => any;
    lastRefresh: Date;
}

interface State {
    user: UserDto | undefined;
    membership: MembershipDto | undefined;
    tab: "comments" | "history";
}

class PostView extends Component<Props, State> {
    state: State = {
        user: undefined,
        membership: undefined,
        tab: "comments",
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
        const { post, onVote, onUpdate, lastRefresh } = this.props;
        const { user, membership, tab } = this.state;
        const isIncident = post.type === "ISSUE";

        return (
            <>
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
                            {isIncident && <IncidentBadge state={post.state} />}
                            <div className="post-date">{formatDate(new Date(post.created_at))}</div>
                            {isIncident && UserService.userHasPowers() && <UpdateHistory post={post} onUpdate={() => onUpdate()} />}
                            <PostFooter post={post} onVote={(val) => onVote(val)} />
                        </Col>
                        {isIncident && <Icon icon="incidentIcon" size="xs" color="#6B7280" className="incident-icon" />}
                    </div>
                </Card>
                {isIncident && (
                    <Row className="issue-tabs" justifyContent="space-between">
                        <Button
                            appearence="secondary"
                            size="md"
                            className={classNames(tab === "comments" && "issue-tab-active")}
                            onClick={() => this.setState({ tab: "comments" })}
                        >
                            COMENTARIOS
                        </Button>
                        <Button
                            appearence="secondary"
                            size="md"
                            className={classNames(tab === "history" && "issue-tab-active")}
                            onClick={() => this.setState({ tab: "history" })}
                        >
                            HISTORIAL
                        </Button>
                    </Row>
                )}
                {tab === "comments" ? (
                    <PostComments post={post} postCreatorName={user?.name} lastRefresh={lastRefresh} />
                ) : (
                    <PostHistory post={post} lastRefresh={lastRefresh} />
                )}
            </>
        );
    }
}

export default connect((state: RootState) => {
    const community = selectCommunity(state.community);
    return {
        communityId: community?.community?.id,
        role: community?.membership?.role,
    };
})(PostView);
