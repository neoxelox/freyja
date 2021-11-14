import React, { Component, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Icon from "../Icon/Icon";
import { Row } from "../Row/Row";
import "./TitleWithBack.scss";

interface Props {
    children: ReactNode;
}

class TitleWithBack extends Component<RouteComponentProps & Props> {
    render(): JSX.Element {
        const { children, history } = this.props;

        return (
            <Row alignItems="center" gap={10}>
                <Icon icon="back" size="xxs" onClick={() => history.goBack()} />
                {children}
            </Row>
        );
    }
}

export default withRouter(TitleWithBack);
