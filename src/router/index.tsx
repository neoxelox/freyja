import { classNames } from "@agustinmj/class-names";
import React, { Component } from "react";
import MainRouter from "./MainRouter";

interface Props {}

class Index extends Component<Props> {
    render(): JSX.Element {
        return <MainRouter />;
    }
}

export default Index;
