import React, { Component } from "react";
import { Modal, modalState, subscribeModalsChange } from "./modal-store";

export class ModalManager extends Component {
    componentDidMount() {
        subscribeModalsChange(() => this.forceUpdate());
    }

    render(): JSX.Element {
        const modals = modalState.map((m: Modal, index: number) => <div key={index.toString()}>{m.modal}</div>);
        return <>{modals}</>;
    }
}
