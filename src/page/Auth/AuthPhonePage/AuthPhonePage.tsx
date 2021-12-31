import React, { Component } from "react";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState, store } from "../../../store";
import { MainRouterPage } from "../../../router/MainRouter";
import { AuthService } from "../../../services/api/services/auth.service";
import { connect } from "react-redux";
import { Col } from "../../../component/atom/Col/Col";
import Auth from "../Auth";
import Button from "../../../component/atom/Button/Button";
import { toast } from "react-hot-toast";
import { randomPhone } from "../../../utils/randomPhone";
import { appActions } from "../../../store/AppStore";

interface StoreProps {
    loading: boolean;
    secretCount: number;
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

    timeout: NodeJS.Timeout;

    componentDidMount() {
        toast.loading("El teléfono se introducirá automáticamente para la demo", { duration: 1100 });
        setTimeout(() => this.autoSubmit(), 100);
    }

    async autoSubmit() {
        this.props.secretCount < 5 && this.setState({ phone: "6" + randomPhone(8) });
        await new Promise((resolve) => (this.timeout = setTimeout(() => resolve(this.props.secretCount < 5 && this.submit()), 1000)));
    }

    getInitialState() {
        return {
            phone: "",
        };
    }

    async submit(e?) {
        e?.preventDefault();
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
        const { phone } = this.state;

        return (
            <>
                <Auth>
                    <Col gap={10}>
                        <h3>Introduce tu número de teléfono</h3>
                        <h5>Te enviaremos un código para verificar tu identidad</h5>
                    </Col>
                    <form id="phone" onSubmit={(e) => this.submit(e)}>
                        <Col gap={20} alignItems="center">
                            <input
                                lang="es"
                                name="phone"
                                placeholder="+34 000 000 000"
                                value={phone}
                                onChange={(evt) => this.updatePhone(evt)}
                                required
                            />
                            <Button type="submit" loading={loading}>
                                SIGUIENTE
                            </Button>
                        </Col>
                    </form>
                </Auth>
                <div
                    onClick={() => store.dispatch(appActions.incrementSecretCount())}
                    style={{ position: "fixed", left: 0, top: 0, width: "100px", height: "100px" }}
                />
                <div
                    onClick={() => store.dispatch(appActions.incrementSecretCount())}
                    style={{ position: "fixed", right: 0, top: 0, width: "100px", height: "100px" }}
                />
            </>
        );
    }
}

export default withRouter(
    connect((state: RootState) => ({
        loading: state.auth.loading,
        secretCount: state.app.secretCount,
    }))(AuthPhonePage),
);
