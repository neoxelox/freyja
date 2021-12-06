import React, { Component } from "react";
import { connect } from "react-redux";
import { PostDto } from "../../../../services/model/post.dto";
import { RootState } from "../../../../store";
import { selectCommunity } from "../../../../store/CommunityStore";
import PostReply from "../../../../page/PostPage/PostReply/PostReply";
import { PostService } from "../../../../services/api/services/post.service";
import Post from "../../../atom/Post/Post";

interface Props {
    post: PostDto;
    postCreatorName: string;
    communityId: string;
    lastRefresh: Date;
}

interface State {
    comments: PostDto[];
}

class PostComments extends Component<Props> {
    state: State = {
        comments: [],
    };

    async componentDidMount(): Promise<void> {
        await this.loadComments();
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        const { lastRefresh } = this.props;
        const shouldUpdate = prevProps.lastRefresh < lastRefresh;
        if (shouldUpdate) this.loadComments();
    }

    async loadComments(): Promise<void> {
        const { communityId, post } = this.props;
        const comments = await PostService.getComments(communityId, post.id);
        if (comments) this.setState({ comments });
    }

    render(): JSX.Element {
        const { post, postCreatorName } = this.props;
        const { comments } = this.state;
        return (
            <>
                <PostReply post={post} postCreatorName={postCreatorName} onReply={() => this.loadComments()} />
                {comments.map((comment: PostDto, i: number) => (
                    <Post
                        key={i.toString()}
                        post={comment}
                        onVote={(val) => this.setState({ comments: comments.map((c) => (c.id === val.id ? val : c)) })}
                    />
                ))}
            </>
        );
    }
}

export default connect((state: RootState) => ({
    communityId: selectCommunity(state.community)?.community?.id,
}))(PostComments);
