import { classNames } from "@agustinmj/class-names";
import React, { Component } from "react";
import "./Image.css";

export interface ImageProps {
    src: string;
    className?: string;
    style?: any;
}

interface State {
    loaded: boolean;
}

export class Image extends Component<ImageProps> {
    state: State = {
        loaded: false,
    };

    render(): JSX.Element {
        const { src, className, style } = this.props;
        const { loaded } = this.state;

        return (
            <>
                <img
                    src={src}
                    alt=""
                    onLoad={() => this.setState({ loaded: true })}
                    className={classNames("image", !loaded && "image-not-loaded", className)}
                    style={style}
                />
            </>
        );
    }
}
