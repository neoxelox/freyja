import React, { Component } from "react";
import Icon from "../../component/atom/Icon/Icon";
import { Col } from "../../component/atom/Col/Col";
import "./LoadingPage.scss";
import { store } from "../../store";
import { appActions } from "../../store/AppStore";

export default class LoadingPage extends Component {
    render(): JSX.Element {
        return (
            <>
                <Col gap={30} justifyContent="center" className="loading-page" alignItems="center">
                    <header className="loading-page-header">
                        <Icon icon="title" size="sm" className="title-icon" />
                    </header>
                    <div className="loading-page-body">
                        <span className="spinner-grow spinner-border text-white" role="status" aria-hidden="true" />
                    </div>
                </Col>
                <div
                    onClick={() => store.dispatch(appActions.incrementSecretCount())}
                    style={{ position: "fixed", left: 0, top: 0, width: "100px", height: "100px" }}
                />
                <div
                    onClick={() => store.dispatch(appActions.incrementSecretCount())}
                    style={{ position: "fixed", right: 0, top: 0, width: "100px", height: "100px" }}
                />
            </>
        );
    }
}
