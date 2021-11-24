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
import IssuePage from "../page/IssuePage/IssuePage";

export enum MainRouterPage {
    HOME = "/",
    AUTH = "/auth",
    AUTHCODE = "/auth/code",
    REGISTER = "/register",
    REGISTERINFO = "/register/info",
    REGISTERCODE = "/register/code",
    POST = "/post/:id",
    ISSUES = "/issues",
}

export default function MainRouter(): JSX.Element {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Route path={MainRouterPage.HOME} component={DashboardPage} exact />
            <Route path={MainRouterPage.AUTH} component={AuthPhonePage} exact />
            <Route path={MainRouterPage.AUTHCODE} component={AuthCodePage} exact />
            <Route path={MainRouterPage.REGISTER} component={RegisterNamePage} exact />
            <Route path={MainRouterPage.REGISTERINFO} component={RegisterInfoPage} exact />
            <Route path={MainRouterPage.REGISTERCODE} component={RegisterCodePage} exact />
            <Route path={MainRouterPage.POST} component={PostPage} />
            <Route path={MainRouterPage.ISSUES} component={IssuePage} />
        </BrowserRouter>
    );
}
