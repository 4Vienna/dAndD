import React, { Component } from "react";
import Login from "./login";
import loginImg from "../../../../../static/assets/images/ancient_campeign.jpg";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }
  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }
  handleUnsuccessfulAuth() {
    this.props.handleSuccessfulLogin();
  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />
        <div className="right-column">
          <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}
