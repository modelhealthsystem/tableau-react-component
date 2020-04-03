import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TableauComponent from "./organisms/tableau-worksheet";
import * as serviceWorker from "./serviceWorker";

const el = <TableauComponent />;

ReactDOM.render(el, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default (e) => <TableauComponent {...e} />;
