import React, { Component } from "react";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../../store";
import Auth from "../Auth";
import Button from "../../../component/atom/Button/Button";
import { connect } from "react-redux";
import { UserService } from "../../../services/api/services/user.service";
import { MainRouterPage } from "../../../router/MainRouter";

interface Props extends RouteComponentProps {
    loading: boolean;
}

interface state {
    code: string;
}
class RegisterCodePage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            code: "",
        };
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    async submit(e) {
        e.preventDefault();

        const { code } = this.state;
        if (code) {
            const success = await UserService.updateEmailEnd(code);
            if (success) this.props.history.replace(MainRouterPage.HOME);
        }
    }

    updateCode(evt) {
        this.setState({ code: evt.target.value });
    }

    render(): JSX.Element {
        const { loading } = this.props;
        return (
            <Auth>
                <h4>Para acabar, introduce el código que hemos enviado a tu correo electrónico</h4>
                <form id="registerCode" onSubmit={(e) => this.submit(e)}>
                    <input type="number" name="registerCode" placeholder="XX XX XX" onChange={(evt) => this.updateCode(evt)} required />
                    <Button type="submit" loading={loading}>
                        SIGUIENTE
                    </Button>
                </form>
            </Auth>
        );
    }
}

export default connect((state: RootState) => ({
    loading: state.user.loading,
}))(withRouter(RegisterCodePage));
