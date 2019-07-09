import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../common/header/index';
import Footer from '../common/footer/index';
import Login from '../pages/login/index';
import Home from '../pages/home/index';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Detail() {
  return <h2>detail</h2>;
}

const appRouter =
  <Router>
    <Header/>
    <div className="appContainer">
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/users" component={Users} />
        <Route path="/detail" component={Detail}/>
      </Route> */}
    </div>
    <Footer/>
  </Router>

export default appRouter;