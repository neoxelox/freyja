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
    }

    render(): JSX.Element {
        const { clicked } = this.state;
        return (
            <>
                {clicked && (
                    <>
                        <Button className="floating-incidence">
                            <span className="btn-text">CREAR INCIDENCIA</span>
                            <Icon icon="whiteIncidentIcon" className="inline-incidence-icon"></Icon>
                        </Button>
                        <Button className="floating-post">
                            <span className="btn-text">CREAR PUBLICACIÓN</span>
                            <Icon icon="whitePostIcon" className="inline-incidence-icon"></Icon>
                        </Button>
                    </>
                )}
                <div className="floating-button" onClick={() => this.onButtonClick()}>
                    <Icon icon="buttonIcon" className="btn-icon"></Icon>
                </div>
            </>
        );
    }
}
