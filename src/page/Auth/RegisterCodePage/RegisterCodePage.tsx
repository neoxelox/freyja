import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";
import store from "../../../store";
import { Redirect } from "react-router-dom";

interface Props {}
interface state {
    code: string;
    redirect: string;
}
export default class RegisterCodePage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            code: "",
            redirect: "",
        };
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    submit() {
        if (this.state.code) {
            // Check if code is valid

            this.registerUser();
        }
    }

    registerUser() {
        // Register user
        // ...

        this.setState({ redirect: "/" });
    }

    updateCode(evt) {
        this.setState({ code: evt.target.value });
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
                        <h3>Para acabar, introduce el código que hemos enviado a tu correo electrónico</h3>
                    </div>
                    <div>
                        <form id="registerCode" onSubmit={() => this.submit()}>
                            <input
                                className="TextInput"
                                type="number"
                                name="registerCode"
                                placeholder="XX XX XX"
                                onChange={(evt) => this.updateCode(evt)}
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
