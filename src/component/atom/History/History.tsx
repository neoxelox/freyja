import React, { Component } from "react";
import "./History.scss";
import { PostHistoryDto } from "../../../services/model/post-history.dto";
import { Col } from "../Col/Col";
import { formatDate } from "../../../utils/format-date";
import IncidentBadge from "../IncidentBadge/IncidentBadge";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";
import { UserDto } from "../../../services/model/user.dto";
import { MembershipDto } from "../../../services/model/membership.dto";
import { CommunityService } from "../../../services/api/services/community.service";
import { Row } from "../Row/Row";
import ProfileImage from "../ProfileImage/ProfileImage";
import { PostDto } from "../../../services/model/post.dto";

interface Props {
    communityId: string;
    history: PostHistoryDto;
    post: PostDto;
}

interface State {
    user: UserDto | undefined;
    membership: MembershipDto | undefined;
}
class History extends Component<Props, State> {
    state: State = {
        user: undefined,
        membership: undefined,
    };

    async componentDidMount(): Promise<void> {
        await this.loadUser();
    }

    async componentDidUpdate(prevProps: Readonly<Props>): Promise<void> {
        if (prevProps.history.created_at !== this.props.history.created_at) await this.loadUser();
    }

    async loadUser(): Promise<void> {
        const { history, communityId, post } = this.props;

        const res = await CommunityService.getUserAndMembership(communityId, history.updator_id || post.creator_id);
        if (res) {
            const { user, membership } = res;
            this.setState({ user, membership });
        }
    }

    render(): JSX.Element {
        const { history } = this.props;
        const { user, membership } = this.state;

        return (
            <Col gap={10} className="history fade-in">
                <h5 className="light">{formatDate(new Date(history.created_at))}</h5>
                <Row gap={10}>
                    <div>
                        <ProfileImage image={user?.picture} role={membership?.role} />
                    </div>
                    <Col gap={5}>
                        <h5>
                            <b>{user?.name}</b>
                        </h5>
                        <h5>Cambió el estado de la incidencia a</h5>
                        <IncidentBadge state={history.state} />
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default connect((state: RootState) => ({
    communityId: selectCommunity(state.community)?.community?.id,
}))(History);
