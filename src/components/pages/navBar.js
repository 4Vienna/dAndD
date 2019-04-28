import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wapper">
        <h3 className="button">
          <FontAwesomeIcon icon="dungeon" />
          Menu
        </h3>
          <div className="bar">
            <div className="nav">
              <Link to="/">
              <FontAwesomeIcon icon="home"/>
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
              <Link to="/login">
                <FontAwesomeIcon icon="lock" />
                Login
              </Link>
            </div>
          </div>

      </div>
    );
  }
}
