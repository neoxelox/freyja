import React, { Component } from "react";
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
}

class PostPage extends Component<Props, State> {
    postPoller: NodeJS.Timeout;

    state: State = {
        post: undefined,
    };

    async componentDidMount(): Promise<void> {
        await this.loadPost();
        this.postPoller = setInterval(() => this.loadPost(), 8000);
    }

    componentDidUpdate(prevProps: Readonly<Props>) {
        const newId = this.props.match.params.id;
        const oldId = prevProps.match.params.id;
        if (newId !== oldId) this.loadPost();
    }

    componentWillUnmount() {
        clearInterval(this.postPoller);
    }

    async loadPost(): Promise<void> {
        //Fetch post and comments and set page state with them
        const { id } = this.props.match.params;
        const { communityId } = this.props;
        const post = await PostService.getPost(communityId, id);
        if (post) this.setState({ post });
    }

    render(): JSX.Element {
        const { post } = this.state;

        return (
            <BasePage footer={false}>
                {post && (
                    <>
                        <PostView post={post} onVote={(val) => this.setState({ post: val })} />
                    </>
                )}
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    communityId: selectCommunity(state.community).community.id,
}))(withRouter(PostPage));
