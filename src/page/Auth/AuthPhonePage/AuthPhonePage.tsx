import React, { Component } from "react";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../../store";
import { MainRouterPage } from "../../../router/MainRouter";
import { AuthService } from "../../../services/api/services/auth.service";
import { connect } from "react-redux";
import { Col } from "../../../component/atom/Col/Col";
import Auth from "../Auth";
import Button from "../../../component/atom/Button/Button";

interface StoreProps {
    loading: boolean;
}

type Props = RouteComponentProps & StoreProps;

interface state {
    phone: string;
}
class AuthPhonePage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            phone: "",
        };
    }

    getInitialState() {
        return {
            phone: "",
        };
    }

    async submit(e) {
        e.preventDefault();
        if (this.state.phone) {
            const success = await AuthService.loginStart(this.state.phone);
            if (success) this.props.history.push(MainRouterPage.AUTHCODE);
        }
    }

    updatePhone(evt) {
        this.setState({ phone: evt.target.value });
    }

    render(): JSX.Element {
        const { loading } = this.props;

        return (
            <Auth>
                <Col gap={10}>
                    <h3>Introduce tu número de teléfono</h3>
                    <h5>Te enviaremos un código para verificar tu identidad</h5>
                </Col>
                <form id="phone" onSubmit={(e) => this.submit(e)}>
                    <Col gap={20} alignItems="center">
                        <input lang="es" name="phone" placeholder="+34 000 000 000" onChange={(evt) => this.updatePhone(evt)} required />
                        <Button type="submit" loading={loading}>
                            SIGUIENTE
                        </Button>
                    </Col>
                </form>
            </Auth>
        );
    }
}

export default withRouter(
    connect((state: RootState) => ({
        loading: state.auth.loading,
    }))(AuthPhonePage),
);
