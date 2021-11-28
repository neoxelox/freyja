import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import "./FloatingButton.scss";

interface Props {}
interface state {
    clicked: boolean;
}

export default class FloatingButton extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            clicked: false,
        };
    }
    //Helper funcions
    onButtonClick() {
        this.setState({ clicked: !this.state.clicked });
        const btn = document.querySelector(".btn-icon");
        btn.classList.toggle("active");
        const incidenceButton = document.querySelector(".floating-incidence");
        const postButton = document.querySelector(".floating-post");
        incidenceButton.classList.toggle("incidence-animation");
        postButton.classList.toggle("post-animation");
    }

    render(): JSX.Element {
        const { clicked } = this.state;
        return (
            <>
                <Link to="/create-issue" className="floating-incidence">
                    <span className="btn-text">CREAR INCIDENCIA</span>
                    <Icon icon="whiteIncidentIcon" className="inline-incidence-icon"></Icon>
                </Link>
                <Link to="/create-post" className="floating-post">
                    <span className="btn-text">CREAR PUBLICACIÓN</span>
                    <Icon icon="whitePostIcon" className="inline-incidence-icon"></Icon>
                </Link>
                <div className="floating-button" onClick={() => this.onButtonClick()}>
                    <Icon icon="buttonIcon" className="btn-icon"></Icon>
                </div>
            </>
        );
    }
}
