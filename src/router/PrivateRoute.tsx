import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../store";
import { MainRouterPage } from "./MainRouter";

interface Props {
    isLoggedIn: boolean;
    hasInfo: boolean;
    hasCommunities: boolean;
}

class PrivateRoute extends Component<RouteProps & Props> {
    getRedirect(): string | void {
        const { isLoggedIn, hasInfo, hasCommunities } = this.props;

        if (!isLoggedIn) return MainRouterPage.AUTH;
        else if (!hasInfo) return MainRouterPage.REGISTER;
        else if (!hasCommunities) return MainRouterPage.JOIN_COMMUNITIES;
    }

    render(): JSX.Element {
        const { children, ...routeProps } = this.props;
        const redirect = this.getRedirect();

        return <Route {...routeProps} render={() => (!redirect ? children : <Redirect to={redirect} />)} />;
    }
}

export default connect((state: RootState) => ({
    isLoggedIn: state.auth.loggedIn,
    hasInfo: !!state.user.info,
    hasCommunities: !!state.community.communities.length,
}))(PrivateRoute);
