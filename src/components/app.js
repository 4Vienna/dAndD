import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import background from "../../static/assets/images/main-background.jpg";

import firebase from "./config/fb-config";

import Home from "./pages/home";
import NavBar from "./pages/navBar";
import Auth from "./pages/edits/auth/auth";
import CharactersPage from "./pages/characters-page";
import Character from "./pages/templates/character";
import Campaigns from "./pages/campaigns";
import Campaign from "./pages/templates/campaign";
import Members from "./pages/members";
import Member from "./pages/templates/member";
import Rules from "./pages/rules";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Icons from "./helpers/icons";
import EditCharacters from "./pages/edits/character/edit-character";
import EditCampaigns from "./pages/edits/campaigns/edit-campaign";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.checkLoggedInStatus = this.checkLoggedInStatus.bind(this);
  }
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoggedInStatus() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      }
    });
  }
  componentDidMount() {
    this.checkLoggedInStatus();
  }
  authorizedPages() {
    return [
      <Route
        key="characters-edit"
        path="/characters-edit"
        component={EditCharacters}
      />,
      <Route
        key="campaigns-edit"
        path="/campaigns-edit"
        component={EditCampaigns}
      />
    ];
  }

  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <Router>
          <div className="screen">
            <NavBar
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            <div className="display">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home
                      {...props}
                      loggedInStatus={this.state.loggedInStatus}
                    />
                  )}
                />
                <Route path="/characters" component={CharactersPage} />
                <Route path="/character/:slug" component={Character} />
                <Route path="/campaigns" component={Campaigns} />
                <Route path="/campaign/:slug" component={Campaign} />
                <Route path="/members" component={Members} />
                <Route path="/member/:slug" component={Member} />
                <Route
                  exact
                  path="/rules"
                  render={props => (
                    <Rules
                      {...props}
                      loggedInStatus={this.state.loggedInStatus}
                    />
                  )}
                />
                {this.state.loggedInStatus === "LOGGED_IN"
                  ? this.authorizedPages()
                  : null}
                <Route
                  path="/login"
                  render={props => (
                    <Auth
                      {...props}
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                    />
                  )}
                />
                <Route path="/edit-characters" component={EditCharacters} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
        <div className="bottom">
          <Contact />
        </div>
      </div>
    );
  }
}
