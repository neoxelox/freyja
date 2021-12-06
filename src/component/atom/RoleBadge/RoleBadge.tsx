import React, { Component } from "react";
import { icons } from "../../../assets/icons";
import Icon, { IconSize } from "../Icon/Icon";
import "./RoleBadge.scss";

interface Props {
    role: string;
    size?: "sm" | "md" | "lg";
}

export default class RoleBadge extends Component<Props> {
    getRoleIcon(role: string): keyof typeof icons {
        if (role === "ADMINISTRATOR") return "administrator";
        else if (role === "PRESIDENT") return "president";
        else return "secretary";
    }

    badgeSize(): IconSize {
        const { size = "sm" } = this.props;

        if (size === "sm") return "xxs";
        else if (size === "md") return "xxs";
        else return "sm";
    }

    iconSize(): IconSize {
        const { size = "sm" } = this.props;

        if (size === "sm") return "mini";
        else if (size === "md") return "mini";
        else return "xxs";
    }

    render(): JSX.Element {
        const { role } = this.props;

        return (
            <>
                {role !== "RESIDENT" && role !== "LESSEE" && (
                    <div className="role-badge">
                        <Icon icon="roleBadge" className="role-badge-icon" size={this.badgeSize()} />
                        <Icon
                            icon={this.getRoleIcon(role)}
                            size={this.iconSize()}
                            className="role-icon"
                            style={{
                                marginLeft: role === "PRESIDENT" ? "-1px" : "1px",
                            }}
                        />
                    </div>
                )}
            </>
        );
    }
}
