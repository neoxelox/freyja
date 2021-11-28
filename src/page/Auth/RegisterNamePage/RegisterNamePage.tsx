import React, { Component } from "react";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../../store";
import { Col } from "../../../component/atom/Col/Col";
import Auth from "../Auth";
import Button from "../../../component/atom/Button/Button";
import { connect } from "react-redux";
import { UserService } from "../../../services/api/services/user.service";
import { MainRouterPage } from "../../../router/MainRouter";

interface Props extends RouteComponentProps {
    loading: boolean;
}

interface state {
    name: string;
    surname: string;
}
class RegisterNamePage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            surname: "",
        };
    }

    async submit(e) {
        e.preventDefault();
        const { name, surname } = this.state;
        if (name && surname) {
            const success = await UserService.update({ name, last_name: surname });
            if (success) this.props.history.push(MainRouterPage.REGISTERINFO);
        }
    }

    updateName(evt) {
        this.setState({ name: evt.target.value });
    }

    updateSurname(evt) {
        this.setState({ surname: evt.target.value });
    }

    render(): JSX.Element {
        const { loading } = this.props;

        return (
            <Auth>
                <h4>Ya casi hemos acabado, sólo nos alta un poco de información acerca de ti</h4>
                <form id="name" onSubmit={(e) => this.submit(e)}>
                    <Col gap={20}>
                        <Col gap={5}>
                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="Tu nombre" onChange={(evt) => this.updateName(evt)} required />
                        </Col>
                        <Col gap={5}>
                            <label>Apellidos</label>
                            <input
                                type="text"
                                name="apellidos"
                                placeholder="Tus apellidos"
                                onChange={(evt) => this.updateSurname(evt)}
                                required
                            />
                        </Col>
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
}))(withRouter(RegisterNamePage));
