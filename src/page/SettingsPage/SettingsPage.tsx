import { Component } from "react";
import BasePage from "../BasePage/BasePage";
import "./SettingsPage.scss";
import CreatePostOrIssue from "../../component/molecule/CreatePostOrIssue/CreatePostOrIssue";
import RoleBadge from "../../component/atom/RoleBadge/RoleBadge";
import { Row } from "../../component/atom/Row/Row";
import { Col } from "../../component/atom/Col/Col";
import Icon from "../../component/atom/Icon/Icon";

export default class SettingsPage extends Component {
    render(): JSX.Element {
        return (
            <BasePage>
                <Row gap={10} alignItems="center" justifyContent="center">
                    <img
                        src="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        className="settings-profile-image"
                    />
                </Row>
                <Row gap={10} alignItems="center" justifyContent="center" className="username">
                    Willirex
                </Row>
                <Row gap={10} alignItems="center" style={{ textAlign: "center" }} justifyContent="center">
                    Ramblas ferreries 40 no se que <br></br> pallafolls, barcelona
                </Row>
                <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                    Mis datos
                    <Icon icon="rightGreyArrow" className="inline-incidence-icon-right"></Icon>
                </Row>
                <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                    Cambiar de comunidad
                    <Icon icon="rightGreyArrow" className="inline-incidence-icon-right"></Icon>
                </Row>
                <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                    Invitaciones
                    <Icon icon="rightGreyArrow" className="inline-incidence-icon-right"></Icon>
                </Row>
                <Row gap={10} alignItems="center" justifyContent="space-between" className="setting-option">
                    Invitar gente a la comunidad
                    <Icon icon="rightGreyArrow" className="inline-incidence-icon-right"></Icon>
                </Row>
                <Row gap={10} alignItems="center" style={{ color: "red" }} justifyContent="space-between" className="setting-option">
                    Borrar cuenta
                </Row>
                <Row gap={10} alignItems="center" style={{ color: "red" }} justifyContent="space-between" className="setting-option">
                    Salir de la comunidad
                </Row>
                <Row gap={10} alignItems="center" style={{ color: "red" }} justifyContent="space-between" className="setting-option">
                    Salir de la comunidad
                    <Icon icon="exitSession" className="inline-incidence-icon-right"></Icon>
                </Row>
            </BasePage>
        );
    }
}
