import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import "firebase/auth";

const NavBar = props => {
  const dynamicLink = (route, linkText, icon) => {
    return (
      <div>
        <Link to={route}>
          <FontAwesomeIcon icon={icon} />
          {linkText}
        </Link>
      </div>
    );
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(e => {
        props.handleSuccessfulLogout();
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
    props.history.push("/");
  };
  return (
    <div className="nav-wapper">
      <h3 className="button">
        <FontAwesomeIcon icon="dungeon" />
        Menu
      </h3>
      <div className="bar">
        <div className="nav">
          <Link to="/">
            <FontAwesomeIcon icon="home" />
            Home
          </Link>
          <Link to="/members">
            <FontAwesomeIcon icon="dice-d20" />
            Members
          </Link>
          {props.loggedInStatus === "LOGGED_IN" ? (
            dynamicLink("/campaigns-edit", "Campaign", "dragon")
          ) : (
            <Link to="/campaigns">
              <FontAwesomeIcon icon="dragon" />
              Campaigns
            </Link>
          )}
          {props.loggedInStatus === "LOGGED_IN" ? (
            dynamicLink("/characters-edit", "Character", "theater-masks")
          ) : (
            <Link to="/characters">
              <FontAwesomeIcon icon="theater-masks" />
              Characters
            </Link>
          )}
          <Link to="/rules">
            <FontAwesomeIcon icon="book" />
            Rules as Written
          </Link>
          {props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handleSignOut}>
              <FontAwesomeIcon icon="sign-out-alt" />
              Sign Out
            </a>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon="lock" />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default withRouter(NavBar);
