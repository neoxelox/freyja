import React, { Component } from "react";
import Button from "@restart/ui/esm/Button";
import "./IssueFilter.scss";
import Icon from "../Icon/Icon";

export default class DashboardPage extends Component {
    render(): JSX.Element {
        return (
            <div className="btn-filter-container">
                <Button className="filter-btn">
                    <Icon icon="filterIcon" size="sm" className="filter-btn-icon"></Icon> Filtrar
                </Button>
                <Button className="filter-btn">
                    <Icon icon="orderIcon" size="sm" className="filter-btn-icon"></Icon> Ordenar{" "}
                </Button>
            </div>
        );
    }
}
