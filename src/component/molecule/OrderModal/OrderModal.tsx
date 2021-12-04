import React, { Component } from "react";
import Modal from "../Modal/Modal";
import { Col } from "../../atom/Col/Col";
import { Row } from "../../atom/Row/Row";
import Icon from "../../atom/Icon/Icon";
import "./OrderModal.scss";
import { IssueOrder, PostService } from "../../../services/api/services/post.service";
import { hideModal } from "../../atom/Modal/modal-store";

interface State {
    order: IssueOrder;
}

export default class OrderModal extends Component<unknown, State> {
    state: State = {
        order: undefined,
    };

    dispatchOrder(type: "asc" | "desc"): void {
        const { order } = this.state;
        PostService.setIssuesOrder(order, type);
        hideModal({ modalName: "order_modal" });
    }

    dispatchResetorder(): void {
        PostService.resetIssuesOrder();
        hideModal({ modalName: "order_modal" });
    }

    getOrder(): string {
        const { order } = this.state;

        if (order === "date") return " fecha";
        else if (order === "priority") return " prioridad";
        else return "";
    }

    render(): JSX.Element {
        const { order } = this.state;

        return (
            <Modal
                title={"Ordenar por" + this.getOrder()}
                name="order_modal"
                footer={
                    <p
                        role="button"
                        style={{ marginTop: "20px", marginBottom: "-20px", textAlign: "center" }}
                        onClick={() => this.dispatchResetorder()}
                    >
                        Cancelar
                    </p>
                }
            >
                <Col gap={15}>
                    {!order && (
                        <>
                            <Row
                                gap={12}
                                alignItems="center"
                                onClick={() => this.setState({ order: "date" })}
                                style={{ paddingLeft: "2px" }}
                                role="button"
                            >
                                <Icon icon="dateSortIcon" />
                                <p>Fecha</p>
                            </Row>
                            <Row gap={10} alignItems="center" onClick={() => this.setState({ order: "priority" })} role="button">
                                <Icon icon="prioritySortIcon" />
                                <p>Prioridad</p>
                            </Row>
                        </>
                    )}
                    {order && (
                        <>
                            <Row gap={10} alignItems="center" onClick={() => this.dispatchOrder("asc")} role="button">
                                <Icon icon="lowPriorityFilterIcon" className="order-asc-icon" />
                                <p>Ascendiente</p>
                            </Row>
                            <Row gap={10} alignItems="center" onClick={() => this.dispatchOrder("desc")} role="button">
                                <Icon icon="lowPriorityFilterIcon" className="order-desc-icon" />
                                <p>Descendiente</p>
                            </Row>
                        </>
                    )}
                </Col>
            </Modal>
        );
    }
}
