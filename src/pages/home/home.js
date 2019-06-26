import React from 'react';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aa = this.aa.bind(this)
    this.state = {
      message: 'hello world'
    }
  }
  aa() {
    
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.aa}>aa</button>
        <Link to="/about/">About</Link>
      </div>
    )
  }
}