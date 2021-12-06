import React, { Component } from "react";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../../store";
import Auth from "../Auth";
import Button from "../../../component/atom/Button/Button";
import { connect } from "react-redux";
import { UserService } from "../../../services/api/services/user.service";
import { MainRouterPage } from "../../../router/MainRouter";
import { Col } from "../../../component/atom/Col/Col";
import { toast } from "react-hot-toast";

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

    componentDidMount() {
        toast.loading("El código ha sido enviado", { duration: 2500 });
        setTimeout(() => this.autoSubmit(), 2500);
    }

    async autoSubmit() {
        this.setState({ code: "DM5FJH" });
        await new Promise((resolve) => setTimeout(() => resolve(this.submit()), 600));
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    async submit(e?) {
        e?.preventDefault();

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
        const { code } = this.state;
        return (
            <Auth>
                <h4>Para acabar, introduce el código que hemos enviado a tu correo electrónico</h4>
                <form id="registerCode" onSubmit={() => toast.error("El código no es correcto", { id: "El código no es correcto" })}>
                    <Col gap={20}>
                        <input value={code} name="registerCode" placeholder="XX XX XX" required />
                        <Button type="submit" loading={loading}>
                            SIGUIENTE
                        </Button>
                    </Col>
                </form>
            </Auth>
        );
    }
}

export default connect((state: RootState) => ({
    loading: state.user.loading,
}))(withRouter(RegisterCodePage));
