import React, { Component } from "react";
import { InvitationDto } from "../../../services/model/invitation.dto";
import { CommunityDto } from "../../../services/model/community.dto";
import { CommunityService } from "../../../services/api/services/community.service";
import { Col } from "../../atom/Col/Col";
import { role } from "../../../utils/role";
import "./Invitation.scss";
import Button from "../../atom/Button/Button";
import { Row } from "../../atom/Row/Row";
import { classNames } from "@agustinmj/class-names";

interface Props {
    invitation: InvitationDto;
    onChange: (accepted: boolean) => any;
}

interface State {
    accepted: boolean | undefined;
    community: CommunityDto | undefined;
}

export default class Invitation extends Component<Props, State> {
    state: State = {
        accepted: undefined,
        community: undefined,
    };

    async componentDidMount(): Promise<void> {
        const { invitation } = this.props;
        const community = await CommunityService.getCommunity(invitation.community_id);
        if (community) this.setState({ community });
    }

    changeState(accepted: boolean): void {
        this.setState({ accepted });
        this.props.onChange(accepted);
    }

    render(): JSX.Element {
        const { invitation } = this.props;
        const { accepted, community } = this.state;

        return (
            <Col className="invitation" gap={10}>
                <Col>
                    <h5 className="invitation-community-name">
                        {community?.name}, {invitation.door}
                    </h5>
                    <h5 className="invitation-role">
                        Invitado como <b>{role(invitation.role)}</b>
                    </h5>
                </Col>
                <Row gap={20}>
                    <Button
                        size="md"
                        className={classNames("invitation-deny", accepted === false && "invitation-denied")}
                        onClick={() => this.changeState(false)}
                    >
                        {accepted === false ? "Rechazada" : "Rechazar"}
                    </Button>
                    <Button
                        size="md"
                        className={classNames("invitation-accept", accepted === true && "invitation-accepted")}
                        onClick={() => this.changeState(true)}
                    >
                        {accepted === true ? "Aceptada" : "Aceptar"}
                    </Button>
                </Row>
            </Col>
        );
    }
}
