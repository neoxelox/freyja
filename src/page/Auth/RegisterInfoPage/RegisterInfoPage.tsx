import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";
import { Redirect } from "react-router-dom";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";

interface Props {}
interface state {
    email: string;
    birthday: string;
    redirect: string;
}
export default class RegisterInfoPage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            email: "",
            birthday: "",
            redirect: "",
        };
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    submit() {
        if (this.state.email || this.state.birthday) {
            if (this.state.birthday) store.dispatch(authActions.setBirthday(this.state.birthday));
            if (this.state.email) {
                store.dispatch(authActions.setEmail(this.state.email));
                // Send code to email
                // ...

                this.setState({ redirect: "/register/code" });
            } else this.registerUser();
        }
    }

    skip() {
        this.registerUser();
    }

    registerUser() {
        // Register user
        // ...

        this.setState({ redirect: "/" });
    }

    updateEmail(evt) {
        this.setState({ email: evt.target.value });
    }

    updateBirthday(evt) {
        this.setState({ birthday: evt.target.value });
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
                        <h3>Si quieres puedes decirnos algo más sobre ti</h3>
                    </div>
                    <div className="content">
                        <form id="info" onSubmit={() => this.submit()}>
                            <label className="InputLabel">
                                <b>Correo electrónico</b>
                                <input
                                    className="TextInput"
                                    type="text"
                                    name="email"
                                    placeholder="Tu correo electrónico"
                                    onChange={(evt) => this.updateEmail(evt)}
                                />
                            </label>
                            <label className="InputLabel">
                                <b>Fecha de nacimiento</b>
                                <input className="TextInput" type="date" name="nacimiento" onChange={(evt) => this.updateBirthday(evt)} />
                            </label>
                            <input type="submit" className="NextButton" value="SIGUIENTE" />
                        </form>
                        <a className="OptionButton" href="" onClick={() => this.skip()}>
                            Omitir
                        </a>
                    </div>
                </header>
            </div>
        );
    }
}
