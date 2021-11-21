import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import Router from "./router";
import { Toaster } from "react-hot-toast";
import { ModalManager } from "./component/atom/Modal/ModalManager";
import { store } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Toaster />
        <ModalManager />
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
