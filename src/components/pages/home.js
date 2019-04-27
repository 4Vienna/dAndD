import React, { Component } from "react";
import axios from "axios";

import Slider from "./icons/slider";
import CampaignsList from "./lists/campaigns-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <h1>Basment Dwellers Guild</h1>
          <div id="float-box" className="carasol">
            <Slider />
          </div>
        </div>
        <div className="body">
          <div id="float-box" className="announcements-wrapper">
            <h2>Announcements:</h2>
            <div className="announcement">
              <li>Coming soon: Feast of the Damned</li>
            </div>
          </div>
          <div className="calender">
            One week calender
            <FontAwesomeIcon icon="calendar-alt" />
          </div>
        </div>
        <div id="float-box" className="campaigns-wrapper">
          <h2>Campaigns</h2>
          <div className="campaign-icons">
            <CampaignsList />
          </div>
        </div>
      </div>
    );
  }
}
