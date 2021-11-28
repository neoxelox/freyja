import React, { Component, ReactNode } from "react";
import "./Auth.scss";
import Icon from "../../component/atom/Icon/Icon";
import { Col } from "../../component/atom/Col/Col";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props {
    children?: ReactNode;
}

class Auth extends Component<Props & RouteComponentProps> {
    render(): JSX.Element {
        const { children, location } = this.props;
        const showBack = location.pathname !== "/auth" && location.pathname !== "/register";
        return (
            <Col className="auth-page" alignItems="center">
                {showBack && <Icon icon="back" className="mobile-back-icon" size="xs" onClick={() => this.props.history.goBack()} />}
                <Col gap={30} justifyContent="center">
                    <header className="auth-page-header">
                        <Icon icon="title" size="sm" className="title-icon" />
                    </header>
                    <div className="auth-page-body">
                        <Col gap={30}>{children}</Col>
                    </div>
                </Col>
            </Col>
        );
    }
}

export default withRouter(Auth);
