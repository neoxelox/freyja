import { classNames } from "@agustinmj/class-names";
import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import "./Svg.css";

export interface SvgProps {
    src: string;
    style?: any;
    className?: string;
    color?: string;
    onClick?: () => void;
}

const SvgSpace = (): JSX.Element => {
    return <div className="svg-space" />;
};

export class Svg extends Component<SvgProps> {
    render(): JSX.Element {
        const { src, style, className, color, onClick } = this.props;
        return (
            <ReactSVG
                src={src}
                className={classNames("svg", className)}
                style={style}
                color={color}
                loading={SvgSpace}
                fallback={SvgSpace}
                onClick={() => onClick?.()}
            />
        );
    }
}
