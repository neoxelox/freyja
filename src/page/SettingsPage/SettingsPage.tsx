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
import { Image } from "../../component/atom/Image/Image";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MainRouterPage } from "../../router/MainRouter";

interface Props extends RouteComponentProps {
    info: UserDto;
}

class SettingsPage extends Component<Props> {
    redirectToUserInfo() {
        this.props.history.replace(MainRouterPage.USERINFO);
    }

    render(): JSX.Element {
        const { info } = this.props;

        return (
            <BasePage>
                <Col justifyContent="space-between" gap={50}>
                    <Col gap={10}>
                        <Row gap={10} alignItems="center" justifyContent="center">
                            <Image src={info.picture} className="settings-profile-image" />
                        </Row>

                        <Row gap={10} alignItems="center" justifyContent="center" className="username">
                            {info.name}
                        </Row>
                        <Row gap={10} alignItems="center" style={{ textAlign: "center" }} justifyContent="center">
                            Ramblas ferreries 40 no se que <br /> pallafolls, barcelona
                        </Row>
                    </Col>
                    <Col>
                        <Row
                            gap={10}
                            alignItems="center"
                            justifyContent="space-between"
                            className="setting-option"
                            onClick={() => this.redirectToUserInfo()}
                        >
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
}))(SettingsPage);
