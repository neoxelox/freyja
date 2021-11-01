import { BrowserRouter, Route } from "react-router-dom";
import * as React from "react";
import { ScrollToTop } from "../component/atom/ScrollToTop/ScrollToTop";
import DashboardPage from "../page/DadhboardPage/DashboardPage";

export enum MainRouterPage {
    HOME = "/",
}

export default function MainRouter(): JSX.Element {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Route path={MainRouterPage.HOME} component={DashboardPage} exact />
        </BrowserRouter>
    );
}
