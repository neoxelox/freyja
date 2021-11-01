import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import store from "./store";
import { Provider } from "react-redux";
import Router from "./router";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
