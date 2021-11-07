import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LocationLink from "../../atom/LocationLink/LocationLink";
import "./Footer.scss";

export default class Footer extends Component {
    render(): JSX.Element {
        return (
            <Row className="footer align-items-center">
                <Col className="justify-content-center">
                    <LocationLink to="/" icon="homeOutlined" selectedIcon="home">
                        Comunidad
                    </LocationLink>
                </Col>
                <Col className="align-items-center">
                    <LocationLink to="/incidencias" icon="issueOutlined" selectedIcon="issue">
                        Incidencias
                    </LocationLink>
                </Col>
                <Col className="align-items-center">
                    <LocationLink to="/calendario" icon="calendarOutline" selectedIcon="calendar">
                        Calendario
                    </LocationLink>
                </Col>
            </Row>
        );
    }
}
