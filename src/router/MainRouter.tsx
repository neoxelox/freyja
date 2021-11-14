import { BrowserRouter, Route } from "react-router-dom";
import * as React from "react";
import { ScrollToTop } from "../component/atom/ScrollToTop/ScrollToTop";
import DashboardPage from "../page/DadhboardPage/DashboardPage";
import PostPage from "../page/PostPage/PostPage";

export enum MainRouterPage {
    HOME = "/",
    POST = "/post/:id",
}

export default function MainRouter(): JSX.Element {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Route path={MainRouterPage.HOME} component={DashboardPage} exact />
            <Route path={MainRouterPage.POST} component={PostPage} />
        </BrowserRouter>
    );
}
