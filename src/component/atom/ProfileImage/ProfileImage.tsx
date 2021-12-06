import React, { Component, CSSProperties } from "react";
import RoleBadge from "../RoleBadge/RoleBadge";
import "./ProfileImage.scss";
import { MembershipDto } from "../../../services/model/membership.dto";
import { Image } from "../Image/Image";
import { classNames } from "@agustinmj/class-names";

interface Props {
    image: string;
    role: MembershipDto["role"];
    className?: string;
    style?: CSSProperties;
    size?: "sm" | "md" | "lg";
}

export default class ProfileImage extends Component<Props> {
    render(): JSX.Element {
        const { image, role, className, style, size = "sm" } = this.props;

        return (
            <div className="profile-image-container">
                <Image src={image} className={classNames("profile-image", "profile-image-" + size, className)} style={style} />
                <RoleBadge role={role} size={size} />
            </div>
        );
    }
}
