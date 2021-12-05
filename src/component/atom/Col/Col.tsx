import React, { Component } from "react";
import { Property } from "csstype";
import "./Col.css";
import { classNames } from "@agustinmj/class-names";

export interface ColProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    flex?: number;
    className?: string;
    style?: any;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    gap?: number;
    overflow?: boolean;
}

export class Col extends Component<ColProps> {
    render(): JSX.Element {
        const { children, flex, className, style, alignItems, justifyContent, gap, overflow, ...rest } = this.props;

        return (
            <div
                className={classNames("my-col", className)}
                style={{
                    flex: flex !== undefined ? flex : 1,
                    alignItems,
                    justifyContent,
                    rowGap: gap ? gap + "px" : undefined,
                    overflow: overflow ? "visible" : undefined,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </div>
        );
    }
}
