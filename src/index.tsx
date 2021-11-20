import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import store from "./store";
import { Provider } from "react-redux";
import Router from "./router";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
    <React.StrictMode>
        <Toaster />
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
