import React, { Component } from "react";
import { Row } from "../../../atom/Row/Row";
import Icon from "../../../atom/Icon/Icon";
import "./PriorityFilters.scss";
import { PostDto } from "../../../../services/model/post.dto";
import { PostService } from "../../../../services/api/services/post.service";
import { hideModal } from "../../../atom/Modal/modal-store";

export default class PriorityFilters extends Component {
    dispatchPriorityFilter(priority: PostDto["priority"]): void {
        PostService.setIssuesFilter(priority);
        hideModal({ modalName: "filter_modal" });
    }

    render(): JSX.Element {
        return (
            <>
                <Row gap={10} alignItems="center" onClick={() => this.dispatchPriorityFilter(0)} role="button">
                    <Icon icon="lowPriorityFilterIcon" />
                    <p>Baja</p>
                </Row>
                <Row gap={10} alignItems="center" onClick={() => this.dispatchPriorityFilter(5)} role="button">
                    <Icon icon="mediumPriorityFilterIcon" />
                    <p>Media</p>
                </Row>
                <Row gap={10} alignItems="center" onClick={() => this.dispatchPriorityFilter(10)} role="button">
                    <Icon icon="highPriorityFilterIcon" />
                    <p>Alta</p>
                </Row>
            </>
        );
    }
}
