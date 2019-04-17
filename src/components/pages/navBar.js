import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.activeNav = this.activeNav.bind(this);
  }
  activeNav = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className="nav-wapper">
        <h3 className="button" onClick={this.activeNav}>
          <FontAwesomeIcon icon="dungeon" />
          Menu
        </h3>
        {this.state.active ? (
          <div className="bar">
            <div className="nav">
              <Link exact to="/">
                Home
              </Link>
              <Link to="/members">
                <FontAwesomeIcon icon="dice-d20" />
                Members
              </Link>
              <Link to="/campaigns">
                <FontAwesomeIcon icon="dragon" />
                Campaigns
              </Link>
              <Link to="/characters">
                <FontAwesomeIcon icon="theater-masks" />
                Characters
              </Link>
              <Link to="/rules">
                <FontAwesomeIcon icon="book" />
                Rules as Written
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
