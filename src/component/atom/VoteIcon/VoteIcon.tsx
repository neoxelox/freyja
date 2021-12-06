import React, { Component } from "react";
import "./VoteIcon.scss";
import { PostDto } from "../../../services/model/post.dto";
import Icon from "../Icon/Icon";
import { icons } from "../../../assets/icons";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";
import { classNames } from "@agustinmj/class-names";
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

class VoteIcon extends Component<Props, State> {
    state: State = {
        voted: false,
    };

    componentDidMount() {
        const { post, membershipId } = this.props;
        this.setState({ voted: !!post.voter_ids.find((id) => id === membershipId) });
    }

    icon(): keyof typeof icons {
        const { voted } = this.state;
        if (voted) return "voted";
        else return "likeIcon";
    }

    color(): string | undefined {
        const { voted } = this.state;
        if (voted) return "voted";
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
        return <Icon icon={this.icon()} size="xs" className={classNames("vote-icon", this.color())} onClick={(e) => this.vote(e)} />;
    }
}

export default connect((state: RootState) => {
    const community = selectCommunity(state.community);
    return {
        communityId: community?.community.id,
        membershipId: community?.membership.id,
    };
})(VoteIcon);
