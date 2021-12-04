import React, { Component } from "react";
import LocationLink from "../../atom/LocationLink/LocationLink";
import "./Footer.scss";
import { Row } from "../../atom/Row/Row";
import { Col } from "../../atom/Col/Col";

export default class Footer extends Component {
    render(): JSX.Element {
        return (
            <Row justifyContent="space-between" alignItems="center" className="footer">
                <Col gap={10}>
                    <LocationLink to="/" icon="homeOutlined" selectedIcon="home">
                        Comunidad
                    </LocationLink>
                </Col>
                <Col gap={10}>
                    <LocationLink to="/issues" icon="issueOutlined" selectedIcon="issue">
                        Incidencias
                    </LocationLink>
                </Col>
                <Col gap={10}>
                    <LocationLink to="/calendar" icon="calendarOutline" selectedIcon="calendar">
                        Calendario
                    </LocationLink>
                </Col>
            </Row>
        );
    }
}
