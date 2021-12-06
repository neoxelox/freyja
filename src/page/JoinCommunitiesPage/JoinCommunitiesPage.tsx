import React, { Component } from "react";
import { connect } from "react-redux";
import { InvitationDto } from "../../services/model/invitation.dto";
import { RootState } from "../../store";
import BasePage from "../BasePage/BasePage";
import Invitation from "../../component/molecule/Invitation/Invitation";
import JoinCommunitiesFooter from "./JoinCommunitiesFooter";
import "./JoinCommunitiesPage.scss";
import { CommunityService } from "../../services/api/services/community.service";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MainRouterPage } from "../../router/MainRouter";
import { AppService } from "../../services/api/services/app.service";

interface Props extends RouteComponentProps {
    invitations: InvitationDto[];
}

interface State {
    resolutions: (boolean | undefined)[];
}

class JoinCommunitiesPage extends Component<Props, State> {
    state: State = {
        resolutions: [],
    };

    componentDidMount() {
        const { invitations } = this.props;
        this.setState({ resolutions: Array(invitations.length).fill(undefined) });
    }

    resolveInvitation(index: number, accepted: boolean): void {
        const { resolutions } = this.state;
        this.setState({ resolutions: resolutions.map((r, i) => (i === index ? accepted : r)) });
    }

    async submitInvitations(): Promise<void> {
        const { invitations, history } = this.props;
        const { resolutions } = this.state;

        const responses = await Promise.all(
            resolutions.map((r, i) =>
                r ? CommunityService.acceptInvitation(invitations[i].id) : CommunityService.rejectInvitation(invitations[i].id),
            ),
        );

        AppService.setLoadingTimeout();
        await AppService.refresh();

        if (responses.every((r) => r === true)) history.replace(MainRouterPage.HOME);
    }

    render(): JSX.Element {
        const { invitations } = this.props;
        const { resolutions } = this.state;

        return (
            <BasePage
                footer={
                    <JoinCommunitiesFooter
                        onClick={() => this.submitInvitations()}
                        disabled={resolutions.some((resolution) => resolution === undefined) || !invitations.length}
                    />
                }
                showLeftMenu={false}
            >
                {invitations.map((inv, index) => (
                    <Invitation invitation={inv} onChange={(val) => this.resolveInvitation(index, val)} />
                ))}
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    invitations: state.community.invitations,
}))(withRouter(JoinCommunitiesPage));
