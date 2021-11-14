import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";

export default class RegisterCodePage extends Component {
    render(): JSX.Element {
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
                        <form id="registerCode">
                            <input className="TextInput" type="number" name="registerCode" placeholder="XX XX XX" />
                        </form>
                        <button className="NextButton" type="submit" form="registerCode" value="Submit">
                            SIGUIENTE
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}
