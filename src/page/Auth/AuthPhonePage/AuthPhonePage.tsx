import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";
import store from "../../../store";
import { Redirect } from "react-router-dom";

interface Props {}
interface state {
    phone: string;
    redirect: string;
}
export default class AuthPhonePage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            phone: "",
            redirect: "",
        };
    }

    getInitialState() {
        return {
            phone: "",
        };
    }

    submit() {
        if (this.state.phone) {
            store.dispatch({ type: "auth/setPhone", payload: this.state.phone });
            this.setState({ redirect: "/auth/code" });
        }
    }

    updatePhone(evt) {
        this.setState({ phone: evt.target.value });
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
                        <h3>Introduce tu número de teléfono</h3>
                        <p>Te enviaremos un código para verificar tu identidad</p>
                    </div>
                    <div>
                        <form id="phone" onSubmit={() => this.submit()}>
                            <input
                                className="TextInput"
                                type="number"
                                name="phone"
                                placeholder="+34 000 000 000"
                                onChange={(evt) => this.updatePhone(evt)}
                                required
                            />
                            <input type="submit" className="NextButton" value="SIGUIENTE" />
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
