import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../common/header/index';
import Footer from '../common/footer/index';

import Home from '../pages/home/home';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const appRouter =
  <Router>
    <Header/>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/users/detail" component={Home} />
    </div>
    <Footer/>
  </Router>

export default appRouter;