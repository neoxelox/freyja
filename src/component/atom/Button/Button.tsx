import React, { Component, DetailedHTMLProps } from "react";

interface Props extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean;
}

export default class Button extends Component<Props> {
    render(): JSX.Element {
        const { loading, children, disabled, ...buttonProps } = this.props;

        return (
            <button {...buttonProps} disabled={loading || disabled}>
                {loading ? <span className="spinner-grow spinner-border-md text-white" role="status" aria-hidden="true" /> : children}
            </button>
        );
    }
}
