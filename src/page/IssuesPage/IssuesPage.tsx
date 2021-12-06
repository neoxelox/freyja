import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import BasePage from "../BasePage/BasePage";
import FloatingButton from "../../component/atom/FloatingButton/FloatingButton";
import IssueFilter from "../../component/atom/IssueFilter/IssueFilter";
import { PostDto } from "../../services/model/post.dto";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { selectIssues } from "../../store/PostStore";
import { selectCommunity } from "../../store/CommunityStore";
import { PostService } from "../../services/api/services/post.service";

interface Props {
    issues: PostDto[];
    loading: boolean;
    communityId: string;
}

class IssuesPage extends Component<Props> {
    componentDidMount() {
        PostService.getPosts(this.props.communityId);
    }

    render(): JSX.Element {
        const { issues } = this.props;

        return (
            <BasePage>
                <IssueFilter />
                {issues.map((issue, index) => (
                    <Post post={issue} key={index.toString()} />
                ))}
                <FloatingButton />
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    issues: selectIssues(state.post),
    loading: state.post.loading,
    communityId: selectCommunity(state.community).community.id,
}))(IssuesPage);
