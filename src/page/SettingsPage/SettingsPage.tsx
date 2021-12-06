import { Component } from "react";
import BasePage from "../BasePage/BasePage";
import "./SettingsPage.scss";
import { Row } from "../../component/atom/Row/Row";
import { Col } from "../../component/atom/Col/Col";
import Icon from "../../component/atom/Icon/Icon";
import { AuthService } from "../../services/api/services/auth.service";
import { UserDto } from "../../services/model/user.dto";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { selectCommunity } from "../../store/CommunityStore";
import { CommunityAndMembershipDto } from "../../services/model/community-and-membership.dto";
import ProfileImage from "../../component/atom/ProfileImage/ProfileImage";

interface Props {
    info: UserDto;
    community: CommunityAndMembershipDto;
}

class SettingsPage extends Component<Props> {
    render(): JSX.Element {
        const { info, community } = this.props;

        return (
            <BasePage footer={false}>
                <Col justifyContent="space-between" gap={50}>
                    <Col gap={10}>
                        <Row gap={10} alignItems="center" justifyContent="center">
                            <ProfileImage
                                image={info?.picture}
                                role={community.membership.role}
                                className="settings-profile-image"
                                size="lg"
                            />
                        </Row>

                        <Row gap={10} alignItems="center" justifyContent="center" className="username">
                            {info?.name}
                        </Row>
                        <Row gap={10} alignItems="center" style={{ textAlign: "center" }} justifyContent="center">
                            {community.community.name || community.community.address} <br /> {community.membership.door}
                        </Row>
                    </Col>
                    <Col>
                        <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                            Mis datos
                            <Icon icon="rightGreyArrow" />
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                            Cambiar de comunidad
                            <Icon icon="rightGreyArrow" />
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                            Invitaciones
                            <Icon icon="rightGreyArrow" />
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                            Invitar gente a la comunidad
                            <Icon icon="rightGreyArrow" />
                        </Row>
                        <Row
                            gap={10}
                            alignItems="center"
                            style={{ color: "red" }}
                            justifyContent="space-between"
                            className="setting-option"
                        >
                            Borrar cuenta
                        </Row>
                        <Row
                            gap={10}
                            alignItems="center"
                            style={{ color: "red" }}
                            justifyContent="space-between"
                            className="setting-option"
                        >
                            Salir de la comunidad
                        </Row>
                        <Row
                            gap={10}
                            alignItems="center"
                            style={{ color: "red" }}
                            justifyContent="space-between"
                            className="setting-option"
                            onClick={() => AuthService.logout()}
                        >
                            Salir
                            <Icon icon="exitSession" className="logout-icon" />
                        </Row>
                    </Col>
                </Col>
            </BasePage>
        );
    }
}

export default connect((state: RootState) => ({
    info: state.user.info,
    community: selectCommunity(state.community),
}))(SettingsPage);
