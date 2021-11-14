import React, { Component } from "react";
import { PostDto } from "../../../../services/model/post.dto";
import { Col } from "../../Col/Col";
import Icon from "../../Icon/Icon";
import { Row } from "../../Row/Row";
import "./PostFooter.scss";

interface Props {
    commentCount: number;
    likeCount: number;
    dayCount: number;
    isIncident: boolean | undefined;
}

export default class PostFooter extends Component<Props> {
    render(): JSX.Element {
        const { commentCount, likeCount, dayCount, isIncident } = this.props;

        return (
            <Row className="post-footer" justifyContent="space-between">
                <Row alignItems="center" justifyContent="flex-start">
                    <Icon icon="commentIcon" size="xs" color="#6B7280" className="footer-icon"></Icon>
                    <span className="footer-text">{commentCount}</span>
                </Row>
                <Row alignItems="center" justifyContent="center">
                    {isIncident ? (
                        <Icon icon="upvoteIcon" size="xs" color="#6B7280" className="footer-icon"></Icon>
                    ) : (
                        <Icon icon="likeIcon" size="xs" color="#6B7280" className="footer-icon"></Icon>
                    )}
                    <span className="footer-text">{likeCount}</span>
                </Row>
                <Row alignItems="center" justifyContent="flex-end">
                    <span className="footer-text">{dayCount} días</span>
                </Row>
            </Row>
        );
    }
}
