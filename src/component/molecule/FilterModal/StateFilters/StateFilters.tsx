import React, { Component } from "react";
import { Row } from "../../../atom/Row/Row";
import "./StateFilters.scss";
import { PostDto } from "../../../../services/model/post.dto";
import { classNames } from "@agustinmj/class-names";
import { PostService } from "../../../../services/api/services/post.service";
import { hideModal } from "../../../atom/Modal/modal-store";

interface StateBulletProps {
    state: PostDto["state"];
}

function getStateClassName(state: PostDto["state"]): string {
    switch (state) {
        case "PENDING":
            return "pending";
        case "REJECTED":
            return "rejected";
        case "ACCEPTED":
            return "accepted";
        case "IN PROGRESS":
            return "in-progress";
        case "RESOLVED":
            return "resolved";
    }
}

export function StateBullet(props: StateBulletProps): JSX.Element {
    return <div className={classNames("state-bullet", getStateClassName(props.state))} />;
}

interface StateOption {
    state: PostDto["state"];
    text: string;
    onClick: () => any;
}

function dispatchStateFilter(state: PostDto["state"]): void {
    PostService.setIssuesFilter(state);
    hideModal({ modalName: "filter_modal" });
}

const states: StateOption[] = [
    {
        state: "PENDING",
        text: "Pendiente",
        onClick: () => dispatchStateFilter("PENDING"),
    },
    {
        state: "REJECTED",
        text: "Rechazada",
        onClick: () => dispatchStateFilter("REJECTED"),
    },
    {
        state: "ACCEPTED",
        text: "Aceptada",
        onClick: () => dispatchStateFilter("ACCEPTED"),
    },
    {
        state: "IN PROGRESS",
        text: "En progreso",
        onClick: () => dispatchStateFilter("IN PROGRESS"),
    },
    {
        state: "RESOLVED",
        text: "Resuelta",
        onClick: () => dispatchStateFilter("RESOLVED"),
    },
];

export default class StateFilters extends Component {
    render(): JSX.Element {
        return (
            <>
                {states.map((state, index) => (
                    <Row gap={10} alignItems="center" onClick={() => state.onClick()} key={index.toString()} role="button">
                        <StateBullet state={state.state} />
                        <p>{state.text}</p>
                    </Row>
                ))}
            </>
        );
    }
}
