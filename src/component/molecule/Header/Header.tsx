import React, { Component, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Row } from "../../atom/Row/Row";
import TitleWithBack from "../../atom/TitleWithBack/TitleWithBack";
import "./Header.scss";
import ProfileLink from "./ProfileLink/ProfileLink";

class Header extends Component<RouteComponentProps> {
    getTitle(): ReactNode {
        const pathname = this.props.location.pathname;

        if (pathname === "/" || pathname === "/issues") {
            return (
                <>
                    Rambla les ferreries nº44 (HARDCODED)
                    <ProfileLink />
                </>
            );
        } else if (pathname.startsWith("/issue/")) {
            return <TitleWithBack>Incidencia</TitleWithBack>;
        } else if (pathname.startsWith("/post/")) {
            return <TitleWithBack>Publicación</TitleWithBack>;
        } else if (pathname.startsWith("/settings/")) {
            return <TitleWithBack>Ajustes</TitleWithBack>;
        }

        switch (pathname) {
            case "/":
            case "/incidencias":

            case "/publicación/":

            case "/incidencia/:id":
                return <TitleWithBack>Incidencia</TitleWithBack>;
            case "/settings":
                return <TitleWithBack>Ajustes</TitleWithBack>;
            case "/create-post":
                return <TitleWithBack>Nueva publicación</TitleWithBack>;
            case "/create-issue":
                return <TitleWithBack>Nueva incidencia</TitleWithBack>;
        }
    }

    render(): JSX.Element {
        return (
            <Row className="header" alignItems="center" justifyContent="space-between">
                {this.getTitle()}
            </Row>
        );
    }
}

export default withRouter(Header);
