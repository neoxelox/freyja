import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { Row } from "../../atom/Row/Row";
import TitleWithBack from "../../atom/TitleWithBack/TitleWithBack";
import "./Header.scss";
import ProfileLink from "./ProfileLink/ProfileLink";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";

interface Props extends RouteComponentProps {
    communityName: string;
    hasCommunities: boolean;
}

class Header extends Component<Props> {
    getTitle(): ReactNode {
        const pathname = this.props.location.pathname;

        if (pathname === "/" || pathname === "/issues") {
            return (
                <>
                    {this.props.communityName}
                    <ProfileLink />
                </>
            );
        } else if (pathname.startsWith("/issue/")) {
            return <TitleWithBack>Incidencia</TitleWithBack>;
        } else if (pathname.startsWith("/post/")) {
            return <TitleWithBack>Publicación</TitleWithBack>;
        } else if (pathname.startsWith("/settings")) {
            return <TitleWithBack>Ajustes</TitleWithBack>;
        }

        switch (pathname) {
            case "/join-communities":
                return <TitleWithBack action={this.props.hasCommunities ? "back" : "logout"}>Unirse a comunidades</TitleWithBack>;
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

export default withRouter(
    connect((state: RootState) => {
        const c = selectCommunity(state.community);
        const community = c?.community;
        return {
            communityName: community?.name || community?.address || "Comunidad",
            hasCommunities: state.community.activeCommunity !== undefined,
        };
    })(Header),
);
