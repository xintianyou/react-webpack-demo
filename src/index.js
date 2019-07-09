import React from "react";
import '@babel/polyfill';
import ReactDom from "react-dom";
import appRrouter from './router/index';
import './assets/scss/global.scss';
import API from './utils/axios';
React.Component.prototype.$api = API;

ReactDom.render(
    appRrouter,
    document.getElementById("app")
);