import React, { Component } from "react";
import "./IssueFilter.scss";
import { Row } from "../Row/Row";
import FilterButton from "./FilterButton";
import OrderButton from "./OrderButton";

export default class DashboardPage extends Component {
    render(): JSX.Element {
        return (
            <Row className="btn-filter-container" gap={10} justifyContent="flex-end">
                <FilterButton />
                <OrderButton />
            </Row>
        );
    }
}
