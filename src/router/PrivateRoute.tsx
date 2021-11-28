import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../store";
import { MainRouterPage } from "./MainRouter";

interface Props {
    isLoggedIn: boolean;
    hasInfo: boolean;
}

class PrivateRoute extends Component<RouteProps & Props> {
    getRedirect(): string | void {
        const { isLoggedIn, hasInfo } = this.props;

        if (!isLoggedIn) return MainRouterPage.AUTH;
        else if (!hasInfo) return MainRouterPage.REGISTER;
    }

    render(): JSX.Element {
        const { isLoggedIn, hasInfo, ...routeProps } = this.props;
        const redirect = this.getRedirect();

        return !redirect ? (
            <Route {...routeProps} />
        ) : (
            <Redirect
                to={{
                    pathname: redirect,
                }}
            />
        );
    }
}

export default connect((state: RootState) => ({
    isLoggedIn: state.auth.loggedIn,
    hasInfo: !!state.user.info?.name,
}))(PrivateRoute);
