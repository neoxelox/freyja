import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";

export default class AuthCodePage extends Component {
    render(): JSX.Element {
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
                        <form id="phoneCode">
                            <input className="TextInput" type="number" name="phoneCode" placeholder="XX XX XX" />
                        </form>
                        <button className="NextButton" type="submit" form="phoneCode" value="Submit">
                            SIGUIENTE
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}
