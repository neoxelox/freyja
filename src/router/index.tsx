import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";
import MainRouter from "./MainRouter";
import { RootState } from "../store";

interface Props {
    loading: boolean;
}

class Index extends Component<Props> {
    render(): ReactNode {
        const { loading } = this.props;
        return !loading ? <MainRouter /> : <div>LOADING</div>;
    }
}

export default connect((state: RootState) => ({
    loading: state.app.loading,
}))(Index);
