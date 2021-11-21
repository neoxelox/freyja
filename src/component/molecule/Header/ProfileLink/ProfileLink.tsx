import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfileLink.scss";

export default class ProfileLink extends Component {
    render(): JSX.Element {
        return (
            <Link to="/ajustes">
                <img
                    src="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                    className="profile-link"
                />
            </Link>
        );
    }
}
