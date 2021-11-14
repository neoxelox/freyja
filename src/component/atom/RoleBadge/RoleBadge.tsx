import React, { Component } from "react";
import { icons } from "../../../assets/icons";
import Icon from "../Icon/Icon";
import "./RoleBadge.scss";

interface Props {
    role: string;
}

export default class RoleBadge extends Component<Props> {
    getRoleIcon(role: string): keyof typeof icons {
        if (role === "ADMINISTRATOR") return "administrator";
        else if (role === "PRESIDENT") return "president";
        else return "secretary";
    }

    render(): JSX.Element {
        const { role } = this.props;

        return (
            <>
                {role !== "RESIDENT" && role !== "LESSEE" && (
                    <div className="role-badge">
                        <Icon icon="roleBadge" className="role-badge-icon" size="xxs" />
                        <Icon
                            icon={this.getRoleIcon(role)}
                            size="mini"
                            className="role-icon"
                            style={{
                                marginLeft: role === "PRESIDENT" ? "-1px" : "1px",
                                zoom: role === "SECRETARY" ? 0.26 : undefined,
                            }}
                        />
                    </div>
                )}
            </>
        );
    }
}