import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LocationLink from "../../atom/LocationLink/LocationLink";
import "./LeftMenu.scss";

export default class LeftMenu extends Component {
    render(): JSX.Element {
        return (
            <Col className="left-menu">
                <Row className="align-items-center">
                    <LocationLink to="/" icon="homeOutlined" selectedIcon="home" align="row">
                        Comunidad
                    </LocationLink>
                </Row>
                <Row className="align-items-center">
                    <LocationLink to="/incidencias" icon="issueOutlined" selectedIcon="issue" align="row">
                        Incidencias
                    </LocationLink>
                </Row>
                <Row className="align-items-center">
                    <LocationLink to="/calendario" icon="calendarOutline" selectedIcon="calendar" align="row">
                        Calendario
                    </LocationLink>
                </Row>
            </Col>
        );
    }
}