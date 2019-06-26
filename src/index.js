import React from "react";
import ReactDom from "react-dom";
import appRrouter from './router/index';
import './assets/scss/global.scss';

ReactDom.render(
    appRrouter,
    document.getElementById("app")
);