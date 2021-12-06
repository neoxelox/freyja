import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import PostView from "../../component/molecule/PostView/PostView";
import { PostDto } from "../../services/model/post.dto";
import BasePage from "../BasePage/BasePage";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { selectCommunity } from "../../store/CommunityStore";
import { PostService } from "../../services/api/services/post.service";

interface Params {
    id: string;
}

interface StoreProps {
    communityId: string;
}

type Props = RouteComponentProps<Params> & StoreProps;

interface State {
    post: PostDto | undefined;
    comments: PostDto[];
}

class PostPage extends Component<Props, State> {
    state: State = {
        post: undefined,
        comments: [],
    };

    async componentDidMount(): Promise<void> {
        //Fetch post and comments and set page state with them
        const { id } = this.props.match.params;
        const { communityId } = this.props;
        const post = await PostService.getPost(communityId, id);
        if (post) this.setState({ post });
    }

    render(): JSX.Element {
        const { comments, post } = this.state;

        return (
            <BasePage footer={false}>
                {post && (
                    <>
                        <PostView post={post} onVote={(val) => this.setState({ post: val })} />
                        {comments.map((comment: PostDto, i: number) => (
                            <Post key={i.toString()} post={comment} />
                        ))}
                    </>
                )}
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    communityId: selectCommunity(state.community).community.id,
}))(withRouter(PostPage));
