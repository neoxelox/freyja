import React, { Component } from "react";
import "./PriorityIcon.scss";
import { PostDto } from "../../../services/model/post.dto";
import Icon from "../Icon/Icon";
import { icons } from "../../../assets/icons";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";
import { PostService } from "../../../services/api/services/post.service";

interface Props {
    post: PostDto;
    communityId: string;
    membershipId: string;
    onVote?: (post?: PostDto) => any;
}

interface State {
    voted: boolean;
}

class PriorityIcon extends Component<Props, State> {
    state: State = {
        voted: false,
    };

    async componentDidMount(): Promise<void> {
        await this.isVoted();
    }

    async componentDidUpdate(prevProps: Readonly<Props>): Promise<void> {
        if (prevProps.post.id !== this.props.post.id) await this.isVoted();
    }

    async isVoted(): Promise<void> {
        const { post, membershipId } = this.props;
        this.setState({ voted: !!post.voter_ids.find((id) => id === membershipId) });
    }

    icon(): keyof typeof icons {
        const { priority } = this.props.post;
        const { voted } = this.state;
        if (priority < 5) return voted ? "lowPriorityFilterIcon" : "low";
        else if (priority < 10) return voted ? "mediumPriorityFilterIcon" : "medium";
        else return voted ? "highPriorityFilterIcon" : "high";
    }

    color(): string {
        const { priority } = this.props.post;
        if (priority < 5) return "low-priority";
        else if (priority < 10) return "medium-priority";
        else return "high-priority";
    }

    async vote(e: MouseEvent): Promise<void> {
        e.preventDefault();
        const { voted } = this.state;
        const { communityId, post, onVote } = this.props;
        const votedPost = await (voted ? PostService.unvotePost(communityId, post.id) : PostService.votePost(communityId, post.id));
        if (votedPost) onVote?.(votedPost);
        this.setState({ voted: !voted });
    }

    render(): JSX.Element {
        return <Icon icon={this.icon()} size="xs" className={this.color()} onClick={(e) => this.vote(e)} />;
    }
}

export default connect((state: RootState) => {
    const community = selectCommunity(state.community);
    return {
        communityId: community?.community.id,
        membershipId: community?.membership.id,
    };
})(PriorityIcon);
