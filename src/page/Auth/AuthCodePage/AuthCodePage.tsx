import React, { Component } from "react";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../../store";
import { MainRouterPage } from "../../../router/MainRouter";
import { AuthService } from "../../../services/api/services/auth.service";
import { connect } from "react-redux";
import { UserDto } from "../../../services/model/user.dto";
import Auth from "../Auth";
import { Col } from "../../../component/atom/Col/Col";
import Button from "../../../component/atom/Button/Button";
import { toast } from "react-hot-toast";

interface StoreProps {
    user?: UserDto;
    loading: boolean;
}

type Props = StoreProps & RouteComponentProps;

interface state {
    code: string;
}

class AuthCodePage extends Component<Props, state> {
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
        if (this.state.code) {
            const success = await AuthService.loginEnd(this.state.code);
            if (success) {
                const { user } = this.props;
                if (user) this.props.history.push(MainRouterPage.HOME);
                else this.props.history.replace(MainRouterPage.REGISTER);
            }
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
                <h4>Introduce el código que te hemos enviado</h4>
                <form id="phoneCode" onSubmit={(e) => this.submit(e)}>
                    <Col gap={20}>
                        <input value={code} name="phoneCode" placeholder="XX XX XX" onChange={(evt) => this.updateCode(evt)} required />
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
        user: state.user.info,
        loading: state.auth.loading,
    }))(AuthCodePage),
);
