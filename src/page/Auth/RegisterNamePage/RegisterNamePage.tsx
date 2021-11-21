import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";
import { Redirect } from "react-router-dom";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";

interface Props {}
interface state {
    name: string;
    surname: string;
    redirect: string;
}
export default class RegisterNamePage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            surname: "",
            redirect: "",
        };
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    submit() {
        if (this.state.name && this.state.surname) {
            store.dispatch(authActions.setName(this.state.name));
            store.dispatch(authActions.setSurname(this.state.surname));
            this.setState({ redirect: "/register/info" });
        }
    }

    updateName(evt) {
        this.setState({ name: evt.target.value });
    }

    updateSurname(evt) {
        this.setState({ surname: evt.target.value });
    }

    render(): JSX.Element {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        return (
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        <Icon icon="title" size="md" className="title-icon"></Icon>
                    </div>
                    <div>
                        <h3>Ya casi hemos acabado, sólo nos alta un poco de información acerca de ti</h3>
                    </div>
                    <div className="content">
                        <form id="name" onSubmit={() => this.submit()}>
                            <label className="InputLabel">
                                <b>Nombre</b>
                                <input
                                    className="TextInput"
                                    type="text"
                                    name="nombre"
                                    placeholder="Tu nombre"
                                    onChange={(evt) => this.updateName(evt)}
                                    required
                                />
                            </label>
                            <label className="InputLabel">
                                <b>Apellidos</b>
                                <input
                                    className="TextInput"
                                    type="text"
                                    name="apellidos"
                                    placeholder="Tus apellidos"
                                    onChange={(evt) => this.updateSurname(evt)}
                                    required
                                />
                                <input type="submit" className="NextButton" value="SIGUIENTE" />
                            </label>
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
