import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import BasePage from "../BasePage/BasePage";
import FloatingButton from "../../component/atom/FloatingButton/FloatingButton";
import { PostDto } from "../../services/model/post.dto";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { PostService } from "../../services/api/services/post.service";
import { selectCommunity } from "../../store/CommunityStore";

interface Props {
    posts: PostDto[];
    loading: boolean;
    communityId: string;
}

class DashboardPage extends Component<Props> {
    componentDidMount() {
        PostService.getPosts(this.props.communityId);
    }

    render(): JSX.Element {
        const { posts } = this.props;

        return (
            <BasePage>
                {posts.map((post, index) => (
                    <Post post={post} key={index.toString()} />
                ))}
                <FloatingButton />
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    posts: state.post.posts,
    loading: state.post.loading,
    communityId: selectCommunity(state.community)?.community?.id,
}))(DashboardPage);
