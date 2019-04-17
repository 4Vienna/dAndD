import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import background from "../../static/assets/images/main-background.jpg";

import Home from "./pages/home";
import NavBar from "./pages/navBar";
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

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <Router>
          <div className="screen">
            <NavBar />
            <div className="display">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/characters" component={CharactersPage} />
                <Route path="/character/:slug" component={Character} />
                <Route path="/campaigns" component={Campaigns} />
                <Route path="/members" component={Members} />
                <Route path="/member" component={Member} />
                <Route path="/rules" component={Rules} />
                <Route path="/tomb" component={Campaign} />
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
