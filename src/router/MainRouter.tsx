import { BrowserRouter, Route } from "react-router-dom";
import * as React from "react";
import DashboardPage from "../page/DadhboardPage/DashboardPage";
import AuthPhonePage from "../page/Auth/AuthPhonePage/AuthPhonePage";
import AuthCodePage from "../page/Auth/AuthCodePage/AuthCodePage";
import RegisterNamePage from "../page/Auth/RegisterNamePage/RegisterNamePage";
import RegisterInfoPage from "../page/Auth/RegisterInfoPage/RegisterInfoPage";
import RegisterCodePage from "../page/Auth/RegisterCodePage/RegisterCodePage";
import PostPage from "../page/PostPage/PostPage";
import PrivateRoute from "./PrivateRoute";
import IssuePage from "../page/IssuesPage/IssuesPage";
import CreatePostPage from "../page/CreatePostPage/CreatePostPage";
import CreateIssuePage from "../page/CreateIssuePage/CreateIssuePage";
import SettingsPage from "../page/SettingsPage/SettingsPage";
import JoinCommunitiesPage from "../page/JoinCommunitiesPage/JoinCommunitiesPage";
import { ScrollToTop } from "../component/atom/ScrollToTop/ScrollToTop";

export enum MainRouterPage {
    HOME = "/",
    AUTH = "/auth",
    AUTHCODE = "/auth/code",
    REGISTER = "/register",
    REGISTERINFO = "/register/info",
    REGISTERCODE = "/register/code",
    POST = "/post/:id",
    ISSUE = "/issue/:id",
    ISSUES = "/issues",
    CREATEPOST = "/create-post",
    CREATEISSUE = "/create-issue",
    SETTINGS = "/settings",
    JOIN_COMMUNITIES = "/join-communities",
}

export default function MainRouter(): JSX.Element {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Route path={MainRouterPage.AUTH} exact>
                <AuthPhonePage />
            </Route>
            <Route path={MainRouterPage.AUTHCODE}>
                <AuthCodePage />
            </Route>
            <Route path={MainRouterPage.REGISTER} exact>
                <RegisterNamePage />
            </Route>
            <Route path={MainRouterPage.REGISTERINFO}>
                <RegisterInfoPage />
            </Route>
            <Route path={MainRouterPage.REGISTERCODE}>
                <RegisterCodePage />
            </Route>
            <Route path={MainRouterPage.JOIN_COMMUNITIES}>
                <JoinCommunitiesPage />
            </Route>
            <PrivateRoute path={MainRouterPage.HOME} exact>
                <DashboardPage />
            </PrivateRoute>
            <PrivateRoute path={[MainRouterPage.POST, MainRouterPage.ISSUE]} exact>
                <PostPage />
            </PrivateRoute>
            <PrivateRoute path={MainRouterPage.ISSUES}>
                <IssuePage />
            </PrivateRoute>
            <PrivateRoute path={MainRouterPage.CREATEPOST}>
                <CreatePostPage />
            </PrivateRoute>
            <PrivateRoute path={MainRouterPage.CREATEISSUE}>
                <CreateIssuePage />
            </PrivateRoute>
            <PrivateRoute path={MainRouterPage.SETTINGS}>
                <SettingsPage />
            </PrivateRoute>
        </BrowserRouter>
    );
}
