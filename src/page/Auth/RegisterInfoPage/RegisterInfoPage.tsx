import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";

export default class RegisterInfoPage extends Component {
    render(): JSX.Element {
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
                        <form id="info">
                            <label className="InputLabel">
                                <b>Correo electrónico</b>
                                <input className="TextInput" type="text" name="email" placeholder="Tu correo electrónico" />
                            </label>
                            <label className="InputLabel">
                                <b>Fecha de nacimiento</b>
                                <input className="TextInput" type="date" name="nacimiento" />
                            </label>
                        </form>
                        <button className="NextButton" type="submit" form="info" value="Submit">
                            SIGUIENTE
                        </button>
                    </div>
                    <a className="OptionButton" href="">
                        Omitir
                    </a>
                </header>
            </div>
        );
    }
}
