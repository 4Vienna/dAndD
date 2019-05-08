import React, { Component } from "react";
import 'firebase/auth';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  render() {
    return (
      <div>
        <h1>LOGIN</h1>

        <div>{this.state.errorText}</div>
        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          <div className="form-group">
            <FontAwesomeIcon icon="envelope" />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              vlaue={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon="lock" />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              vlaue={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}