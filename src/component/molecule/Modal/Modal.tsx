import React, { Component } from "react";
import "./Modal.scss";
import { ModalProps } from "../../atom/Modal/Modal";
import { Modal as BaseModal } from "../../atom/Modal/Modal";
import Icon from "../../atom/Icon/Icon";

interface OwnProps {
    title: string;
}

type Props = OwnProps & Omit<ModalProps, "closeElement header footer">;

export default class Modal extends Component<Props> {
    render(): JSX.Element {
        const { title, children, ...modalProps } = this.props;

        return (
            <BaseModal
                header={<h4 style={{ marginBottom: "20px" }}>{title}</h4>}
                closeElement={<Icon icon="close" size="xxs" />}
                {...modalProps}
                transition="from-bottom"
            >
                {children}
            </BaseModal>
        );
    }
}
