import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { classNames } from "@agustinmj/class-names";
import Button from "../../component/atom/Button/Button";

interface Props {
    disabled: boolean;
    onClick: () => any;
    loading: boolean;
}

class JoinCommunitiesFooter extends Component<Props> {
    render(): JSX.Element {
        const { disabled, onClick, loading } = this.props;

        return (
            <div className={classNames("footer", "join-communities-footer")}>
                <Button appearence="secondary" disabled={disabled} onClick={() => onClick()} loading={loading}>
                    Continuar
                </Button>
            </div>
        );
    }
}

export default connect((state: RootState) => ({
    loading: state.community.loading,
}))(JoinCommunitiesFooter);
