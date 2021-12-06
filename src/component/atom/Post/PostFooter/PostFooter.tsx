import React, { Component } from "react";
import { PostDto } from "../../../../services/model/post.dto";
import Icon from "../../Icon/Icon";
import PriorityIcon from "../../PriorityIcon/PriorityIcon";
import { Row } from "../../Row/Row";
import "./PostFooter.scss";
import { dayCount } from "../../../../utils/day-count";
import VoteIcon from "../../VoteIcon/VoteIcon";

interface Props {
    post: PostDto;
    onVote?: (post: PostDto) => any;
}

export default class PostFooter extends Component<Props> {
    render(): JSX.Element {
        const { post, onVote } = this.props;
        const commentCount = post.subposts;
        const likeCount = post.voter_ids.length;
        const isIncident = post.type === "ISSUE";

        return (
            <Row className="post-footer" justifyContent="space-between">
                <Row alignItems="center" justifyContent="flex-start">
                    <Icon icon="commentIcon" size="xs" color="#6B7280" className="footer-icon" />
                    <span className="footer-text">{commentCount}</span>
                </Row>
                <Row alignItems="center" justifyContent="center">
                    {isIncident ? (
                        <PriorityIcon post={post} onVote={(val) => onVote?.(val)} />
                    ) : (
                        <VoteIcon post={post} onVote={(val) => onVote?.(val)} />
                    )}
                    <span className="footer-text">{likeCount}</span>
                </Row>
                <Row alignItems="center" justifyContent="flex-end">
                    <span className="footer-text">{dayCount(new Date(post.created_at))}</span>
                </Row>
            </Row>
        );
    }
}
