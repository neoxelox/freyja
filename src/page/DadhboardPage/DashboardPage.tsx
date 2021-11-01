import React, { Component } from "react";
import logo from "../../logo.svg";
import "./DashboardPage.scss";

export default class DashboardPage extends Component {
    render(): JSX.Element {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>SI LEES ESTO ERES MUY GUAPO</p>
                </header>
            </div>
        );
    }
}
