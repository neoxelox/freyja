import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";

export default class RegisterNamePage extends Component {
    render(): JSX.Element {
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
                        <form id="name">
                            <label className="InputLabel">
                                <b>Nombre</b>
                                <input className="TextInput" type="text" name="nombre" placeholder="Tu nombre" />
                            </label>
                            <label className="InputLabel">
                                <b>Apellidos</b>
                                <input className="TextInput" type="text" name="apellidos" placeholder="Tus apellidos" />
                            </label>
                        </form>
                        <button className="NextButton" type="submit" form="name" value="Submit">
                            SIGUIENTE
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}
