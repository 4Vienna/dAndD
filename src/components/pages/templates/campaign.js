import React, { Component } from "react";
import firebase from "../../config/fb-config";

import CharactersList from "../lists/characters-list";

export default class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: {
        name: ""
      }
    };
  }

  getCampaign() {
    const db = firebase.firestore();
    var camRef = db
      .doc(`campaigns/${this.props.match.params.slug}`)
      .get()
      .then(doc => this.setState({ campaign: doc.data() }))
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  componentDidMount() {
    this.getCampaign();
  }
  render() {
    return (
      <div className="page">
        <div className="body">
          <div className="header">
            <div
              className="picture"
              style={{
                backgroundImage: "url(" + this.state.campaign.banner + ")"
              }}
            >
              <h1>{this.state.campaign.name}</h1>
            </div>
          </div>
          <div className="summary">
            <h2>Description</h2>
            <div className="description">{this.state.campaign.description}</div>
            <div className="dm">DM:</div>
            <div className="created-by">By: {this.state.campaign.by}</div>
          </div>
          <div className="characters-list">
            <h2>Characters</h2>
            <div className="list">
              <CharactersList
                campaign={this.state.campaign.name}
                type="campaign"
              />
            </div>
          </div>
          <div className="video-slider">
            <h2>Videos</h2>
            <div className="videos">Coming Soon!</div>
          </div>
        </div>
      </div>
    );
  }
}
