import React, { Component, ReactNode } from "react";
import "./UpdateHistory.scss";
import { PostDto } from "../../../services/model/post.dto";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";
import { MembershipDto } from "../../../services/model/membership.dto";
import Button from "../../atom/Button/Button";
import { Row } from "../../atom/Row/Row";
import { PostService } from "../../../services/api/services/post.service";

interface Props {
    post: PostDto;
    communityId: string;
    membership: MembershipDto;
    onUpdate: () => any;
}

interface State {
    loading: boolean;
}

class UpdateHistory extends Component<Props, State> {
    state: State = {
        loading: false,
    };

    async updateHistory(state: PostDto["state"]): Promise<void> {
        const { communityId, onUpdate, post } = this.props;
        this.setState({ loading: true });
        const updatedIssue = await PostService.updateIssueState(communityId, post.id, { state });
        if (updatedIssue) onUpdate();
        this.setState({ loading: false });
    }

    renderOptions(): ReactNode {
        const { state } = this.props.post;
        const { loading } = this.state;

        switch (state) {
            case "PENDING":
                return (
                    <>
                        <Button disabled={loading} onClick={() => this.updateHistory("ACCEPTED")} size="md" className="accept-history">
                            ACEPTAR
                        </Button>
                        <Button disabled={loading} onClick={() => this.updateHistory("REJECTED")} size="md" className="reject-history">
                            DENEGAR
                        </Button>
                    </>
                );
            case "ACCEPTED":
                return (
                    <Button disabled={loading} onClick={() => this.updateHistory("IN_PROGRESS")} size="md" className="start-history">
                        EMPEZAR
                    </Button>
                );
            case "IN_PROGRESS":
                return (
                    <Button disabled={loading} onClick={() => this.updateHistory("RESOLVED")} size="md" className="resolve-history">
                        RESOLVER
                    </Button>
                );
            case "REJECTED":
                return (
                    <Button disabled={loading} onClick={() => this.updateHistory("ACCEPTED")} size="md" className="accept-history">
                        REABRIR
                    </Button>
                );
            case "RESOLVED":
                return (
                    <Button disabled={loading} onClick={() => this.updateHistory("IN_PROGRESS")} size="md" className="start-history">
                        REABRIR
                    </Button>
                );
        }
    }
    render(): JSX.Element {
        return (
            <Row justifyContent="space-between" gap={10} className="update-history">
                {this.renderOptions()}
            </Row>
        );
    }
}

export default connect((state: RootState) => {
    const community = selectCommunity(state.community);
    return {
        communityId: community?.community?.id,
        membership: community?.membership,
    };
})(UpdateHistory);
