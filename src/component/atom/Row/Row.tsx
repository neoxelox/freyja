import React, { Component } from "react";
import { Property } from "csstype";
import "./Row.css";
import { classNames } from "@agustinmj/class-names";

export interface RowProps {
    flex?: number;
    breakPoint?: "mobile" | "mini" | "sm" | "md" | number;
    className?: string;
    style?: any;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    gap?: number;
    rowGap?: number;
    wrap?: boolean;
}

export interface RowState {
    direction: "row" | "column";
}

export class Row extends Component<RowProps, RowState> {
    state: RowState = {
        direction: "row",
    };

    componentDidMount(): void {
        const { breakPoint } = this.props;
        if (typeof breakPoint === "number") {
            this.checkForBreakpoint();
            window.addEventListener("resize", () => this.checkForBreakpoint());
        }
    }

    componentWillUnmount(): void {
        window.removeEventListener("resize", () => this.checkForBreakpoint());
    }

    checkForBreakpoint(): void {
        const { direction } = this.state;
        const { breakPoint } = this.props;

        if (direction === "row" && window.innerWidth <= (breakPoint as number)) this.setState({ direction: "column" });
        else if (direction === "column" && window.innerWidth > (breakPoint as number)) this.setState({ direction: "row" });
    }

    render(): JSX.Element {
        const { direction } = this.state;
        const { children, flex, breakPoint, className, style, alignItems, justifyContent, gap, rowGap, wrap } = this.props;

        return (
            <div
                className={classNames("my-row", typeof breakPoint === "string" && "my-row-" + breakPoint, className)}
                style={{
                    flex: flex !== undefined ? flex : 1,
                    alignItems,
                    justifyContent,
                    columnGap: gap ? gap + "px" : undefined,
                    rowGap: rowGap ? rowGap + "px" : undefined,
                    flexDirection: typeof breakPoint === "number" ? direction : undefined,
                    flexWrap: wrap ? "wrap" : "nowrap",
                    ...style,
                }}
            >
                {children}
            </div>
        );
    }
}
