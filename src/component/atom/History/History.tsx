import React, { Component } from "react";
import "./History.scss";
import { PostHistoryDto } from "../../../services/model/post-history.dto";
import { Col } from "../Col/Col";
import { formatDate } from "../../../utils/format-date";
import IncidentBadge from "../IncidentBadge/IncidentBadge";

interface Props {
    history: PostHistoryDto;
}

export default class History extends Component<Props> {
    render(): JSX.Element {
        const { history } = this.props;

        return (
            <Col gap={5} className="history">
                <h5 className="light">{formatDate(new Date(history.created_at))}</h5>
                <h5>Se cambió el estado de la incidencia a</h5>
                <IncidentBadge state={history.state} />
            </Col>
        );
    }
}
