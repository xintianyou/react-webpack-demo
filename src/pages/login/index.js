import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '13611841359',
      password: '123456',
      enterprises: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async aa() {
    let res = await this.$api.post('customers/customerLoginEnterprise', {
      username: this.state.username,
      password: this.state.password
    })
    if (res.status == 201) {
      this.setState({
        enterprises: res.data.enterprises
      })
      this.login()
    }
  }
  async login() {
    let res = await this.$api.post('customers/customerLogin', {
      username: this.state.username,
      password: this.state.password,
      enterprise_id: this.state.enterprises[0].enterprise_id
    })
    if (res.status == 201) {
      let { 
        token,
        customer_id,
        enterprise_name,
        customer_name,
        enterprise_id,
        corpNo
      } = res.data;
      let userInfo = {
        customer_id,
        enterprise_id,
        enterprise_name,
        customer_name,
        corpNo
      }
      localStorage.setItem('Authorization', token);
      this.props.history.push("/");
    }
  }
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className="login">
        <p>
          <label>用户名</label>
          <input placeholder="用户名" value={this.state.username} onChange={this.handleChange}/>
        </p>
        <p>
          <label> *密码</label>
          <input placeholder="密码" defaultValue={this.state.password}/>
        </p>
        <button onClick={() => this.aa()}>登录</button>
      </div>
    )
  }
}