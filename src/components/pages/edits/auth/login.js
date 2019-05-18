import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import firebase, { app } from '../../../config/fb-config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    firebase.auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(u =>{
      if(u.operationType === "signIn") {
        this.props.handleSuccessfulAuth();
    }else{
        this.setState({
            errorText: "Wrong email or password"
        })
    }
    })
    .catch(error=>{
      this.props.handleUnsuccessfulAuth;
      this.setState({
        errorText: error.message
      })
    })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  render() {
    if (this.state.redirect === true){
      return <Redirect to='/'/>
    }
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
