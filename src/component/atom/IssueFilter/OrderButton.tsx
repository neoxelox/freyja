import React, { Component } from "react";
import { IssueOrder } from "../../../store/PostStore";
import { showModal } from "../Modal/modal-store";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { Row } from "../Row/Row";
import OrderModal from "../../molecule/OrderModal/OrderModal";

interface Props {
    order: IssueOrder;
}

class OrderButton extends Component<Props> {
    icon(order: IssueOrder): React.ReactElement {
        if (order) {
            const type = order.split("-")[1];
            const asc = type === "asc";
            return <Icon icon="lowPriorityFilterIcon" className={asc ? "order-asc-icon" : "order-desc-icon"} />;
        } else {
            return <Icon icon="orderIcon" />;
        }
    }

    text(order: IssueOrder): string {
        if (order) {
            const type = order.split("-")[0];
            return type === "priority" ? "Prioridad" : "Fecha";
        } else {
            return "Ordenar";
        }
    }

    render(): JSX.Element {
        const { order } = this.props;

        return (
            <Button
                className="filter-btn"
                onClick={() => showModal(<OrderModal />, { modalName: "order_modal" })}
                appearence="tertiary"
                size="sm"
            >
                <Row gap={8} alignItems="center" justifyContent="center">
                    {this.icon(order)}
                    {this.text(order)}
                </Row>
            </Button>
        );
    }
}

export default connect((state: RootState) => ({
    order: state.post.order,
}))(OrderButton);
