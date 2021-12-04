import { BrowserRouter, Route } from "react-router-dom";
import * as React from "react";
import { ScrollToTop } from "../component/atom/ScrollToTop/ScrollToTop";
import DashboardPage from "../page/DadhboardPage/DashboardPage";
import AuthPhonePage from "../page/Auth/AuthPhonePage/AuthPhonePage";
import AuthCodePage from "../page/Auth/AuthCodePage/AuthCodePage";
import RegisterNamePage from "../page/Auth/RegisterNamePage/RegisterNamePage";
import RegisterInfoPage from "../page/Auth/RegisterInfoPage/RegisterInfoPage";
import RegisterCodePage from "../page/Auth/RegisterCodePage/RegisterCodePage";
import PostPage from "../page/PostPage/PostPage";
import PrivateRoute from "./PrivateRoute";
import IssuePage from "../page/IssuePage/IssuePage";
import CreatePostPage from "../page/CreatePostPage/CreatePostPage";
import CreateIssuePage from "../page/CreateIssuePage/CreateIssuePage";
import SettingsPage from "../page/SettingsPage/SettingsPage";
import UserInfoPage from "../page/UserInfoPage/UserInfoPage";

export enum MainRouterPage {
    HOME = "/",
    AUTH = "/auth",
    AUTHCODE = "/auth/code",
    REGISTER = "/register",
    REGISTERINFO = "/register/info",
    REGISTERCODE = "/register/code",
    POST = "/post/:id",
    ISSUES = "/issues",
    CREATEPOST = "/create-post",
    CREATEISSUE = "/create-issue",
    SETTINGS = "/settings",
    USERINFO = "/user",
}

export default function MainRouter(): JSX.Element {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <PrivateRoute path={MainRouterPage.HOME} component={DashboardPage} exact />
            <Route path={MainRouterPage.AUTH} component={AuthPhonePage} exact />
            <Route path={MainRouterPage.AUTHCODE} component={AuthCodePage} />
            <Route path={MainRouterPage.REGISTER} component={RegisterNamePage} exact />
            <Route path={MainRouterPage.REGISTERINFO} component={RegisterInfoPage} />
            <Route path={MainRouterPage.REGISTERCODE} component={RegisterCodePage} />
            <PrivateRoute path={MainRouterPage.POST} component={PostPage} />
            <PrivateRoute path={MainRouterPage.POST} component={PostPage} />
            <PrivateRoute path={MainRouterPage.ISSUES} component={IssuePage} />
            <PrivateRoute path={MainRouterPage.CREATEPOST} component={CreatePostPage} />
            <PrivateRoute path={MainRouterPage.CREATEISSUE} component={CreateIssuePage} />
            <PrivateRoute path={MainRouterPage.SETTINGS} component={SettingsPage} />
            <PrivateRoute path={MainRouterPage.USERINFO} component={UserInfoPage} />
        </BrowserRouter>
    );
}
