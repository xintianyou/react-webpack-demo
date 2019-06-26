import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/users/detail">detail</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}