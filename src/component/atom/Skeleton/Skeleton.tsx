import { classNames } from "@agustinmj/class-names";
import React, { Component } from "react";
import "./Skeleton.css";

interface SkeletonProps {
    className?: string;
    style?: any;
    width?: string;
    height?: string;
}

export class Skeleton extends Component<SkeletonProps> {
    render(): JSX.Element {
        const { className, style, width, height } = this.props;
        return <div className={classNames("skeleton", className)} style={{ width, height, ...style }} role="skeleton" />;
    }
}
