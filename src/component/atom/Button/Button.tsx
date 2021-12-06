import { classNames } from "@agustinmj/class-names";
import React, { Component, DetailedHTMLProps } from "react";
import "./Button.scss";

interface Props extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean;
    appearence?: "primary" | "secondary" | "tertiary";
    size?: "lg" | "md" | "sm";
}

export default class Button extends Component<Props> {
    render(): JSX.Element {
        const { loading, children, disabled, appearence = "primary", size = "lg", className, ...buttonProps } = this.props;

        return (
            <button
                {...buttonProps}
                disabled={loading || disabled}
                className={classNames("button-" + appearence, "button-" + size, className)}
            >
                {loading ? <span className="spinner-grow spinner-border-md text-white" role="status" aria-hidden="true" /> : children}
            </button>
        );
    }
}
