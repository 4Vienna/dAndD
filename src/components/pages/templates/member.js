import React, { Component } from "react";
import firebase from "../../config/fb-config";

import CharactersList from "../../lists/characters-list";
import CampaignsList from "../../lists/campaigns-list";

export default class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: {}
    };
  }
  getMember() {
    const db = firebase.firestore();
    var memberRef = db
      .doc(`members/${this.props.match.params.slug}`)
      .get()
      .then(doc => this.setState({ member: doc.data() }))
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  componentDidMount() {
    this.getMember();
  }
  render() {
    return (
      <div className="page">
        <div className="body">
          <h1>{this.state.member.name}</h1>
          <div className="body-top">
            <div
              className="picture"
              style={{
                backgroundImage: `url(${this.state.member.pic})`
              }}
            />
            <div className="right-column">
              <div className="bio">
                <h2>Bio</h2>
                <div className="bio-content">{this.state.member.bio}</div>
              </div>
              <div className="characters-list">
                <h2>Characters</h2>
                <div className="list">
                  <CharactersList
                    type="player"
                    player={this.state.member.name}
                  />
                </div>
              </div>
              <div className="campaigns">
                <h2>Campaigns</h2>
                <div className="list">
                  <CampaignsList type="dm" dm={this.state.member.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
