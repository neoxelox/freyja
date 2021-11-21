import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";
import { Redirect } from "react-router-dom";
import { store } from "../../../store";
import { authActions } from "../../../store/AuthStore";

interface Props {}
interface state {
    code: string;
    redirect: string;
}
export default class AuthCodePage extends Component<Props, state> {
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
            store.dispatch(authActions.setCode(this.state.code));
            // Check if code is valid
            // ...

            // Check if user exists
            // ...

            //If user does not exist:
            this.setState({ redirect: "/register" });
        }
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
                        <h3>Introduce el código que te hemos enviado</h3>
                    </div>
                    <div>
                        <form id="phoneCode" onSubmit={() => this.submit()}>
                            <input
                                className="TextInput"
                                type="number"
                                name="phoneCode"
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
