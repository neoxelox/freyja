import React, { Component, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Icon from "../Icon/Icon";
import { Row } from "../Row/Row";
import "./TitleWithBack.scss";
import { AuthService } from "../../../services/api/services/auth.service";

interface Props {
    children: ReactNode;
    action?: "back" | "logout";
}

class TitleWithBack extends Component<RouteComponentProps & Props> {
    render(): JSX.Element {
        const { children, history, action = "back" } = this.props;

        return (
            <Row alignItems="center" gap={10}>
                <Icon icon="back" size="xxs" onClick={action === "back" ? () => history.goBack() : () => AuthService.logout()} />
                {children}
            </Row>
        );
    }
}

export default withRouter(TitleWithBack);
