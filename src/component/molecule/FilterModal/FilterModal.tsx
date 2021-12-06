import React, { Component } from "react";
import Modal from "../Modal/Modal";
import { Col } from "../../atom/Col/Col";
import { Row } from "../../atom/Row/Row";
import Icon from "../../atom/Icon/Icon";
import PriorityFilters from "./PriorityFilters/PriorityFilters";
import StateFilters from "./StateFilters/StateFilters";
import { PostService } from "../../../services/api/services/post.service";
import { hideModal } from "../../atom/Modal/modal-store";

interface State {
    filterBy: "state" | "priority" | undefined;
}

export default class FilterModal extends Component<unknown, State> {
    state: State = {
        filterBy: undefined,
    };

    getFilter(): string {
        const { filterBy } = this.state;

        if (filterBy === "state") return " estado";
        else if (filterBy === "priority") return " prioridad";
        else return "";
    }

    dispatchResetFilter(): void {
        PostService.resetIssuesFilter();
        hideModal({ modalName: "filter_modal" });
    }

    render(): JSX.Element {
        const { filterBy } = this.state;

        return (
            <Modal
                title={"Filtrar por" + this.getFilter()}
                name="filter_modal"
                footer={
                    <p
                        role="button"
                        style={{ marginTop: "20px", marginBottom: "-20px", textAlign: "center" }}
                        onClick={() => this.dispatchResetFilter()}
                    >
                        Limpiar
                    </p>
                }
            >
                <Col gap={15}>
                    {!filterBy && (
                        <>
                            <Row gap={10} alignItems="center" onClick={() => this.setState({ filterBy: "state" })} role="button">
                                <Icon icon="stateFilterIcon" />
                                <p>Estado</p>
                            </Row>
                            <Row gap={10} alignItems="center" onClick={() => this.setState({ filterBy: "priority" })} role="button">
                                <Icon icon="prioritySortIcon" />
                                <p>Prioridad</p>
                            </Row>
                        </>
                    )}
                    {filterBy === "state" && <StateFilters />}
                    {filterBy === "priority" && <PriorityFilters />}
                </Col>
            </Modal>
        );
    }
}
