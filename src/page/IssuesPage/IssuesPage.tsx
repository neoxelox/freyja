import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import BasePage from "../BasePage/BasePage";
import FloatingButton from "../../component/atom/FloatingButton/FloatingButton";
import IssueFilter from "../../component/atom/IssueFilter/IssueFilter";
import { PostDto } from "../../services/model/post.dto";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { selectIssues } from "../../store/PostStore";

interface Props {
    issues: PostDto[];
    loading: boolean;
}

class IssuesPage extends Component<Props> {
    render(): JSX.Element {
        const { issues } = this.props;

        return (
            <BasePage>
                <IssueFilter />
                {issues.map((issue) => (
                    <Post {...issue} />
                ))}
                <FloatingButton />
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    issues: selectIssues(state.post),
    loading: state.post.loading,
}))(IssuesPage);
