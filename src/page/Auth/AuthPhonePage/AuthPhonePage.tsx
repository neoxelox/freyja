import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";

export default class AuthPhonePage extends Component {
    render(): JSX.Element {
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
                        <form id="phone">
                            <input className="TextInput" type="number" name="phone" placeholder="+34 000 000 000" />
                        </form>
                        <button className="NextButton" type="submit" form="phone" value="Submit">
                            SIGUIENTE
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}
