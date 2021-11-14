import React, { Component } from "react";
import RoleBadge from "../RoleBadge/RoleBadge";
import "./ProfileImage.scss";

interface Props {
    image: string;
    role: string;
}

export default class ProfileImage extends Component<Props> {
    render(): JSX.Element {
        const { image, role } = this.props;

        return (
            <div className="profile-image-container">
                <img src={image} className="profile-image" />
                <RoleBadge role={role} />
            </div>
        );
    }
}
