import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/fb-config";

import CharactersList from "../../lists/characters-list";
import CampaignList from "../../lists/campaigns-list";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {}
    };
  }

  getCharacter() {
    const db = firebase.firestore();
    var charRef = db
      .doc(`characters/${this.props.match.params.slug}`)
      .get()
      .then(doc => this.setState({ character: doc.data() }))
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  componentDidMount() {
    this.getCharacter();
  }
  componentDidUpdate() {
    this.getCharacter();
  }

  render() {
    return (
      <div className="page">
        <h1 className="name">{this.state.character.name}</h1>
        <div className="body">
          <div className="body-top">
            <div
              className="char-picture"
              style={{
                backgroundImage: `url(${this.state.character.pic})`
              }}
            />
            <div className="right-column">
              <div className="top-right">
                <div className="table">
                  <h2>Basic Information</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td>Player</td>
                        <td>
                          {
                            <Link to={`/member/${this.state.character.player}`}>
                              {this.state.character.player}
                            </Link>
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>Full Name</td>
                        <td>{this.state.character.fullname}</td>
                      </tr>
                      <tr>
                        <td>Race</td>
                        <td>
                          {this.state.character.race}:{" "}
                          {this.state.character.subrace}
                        </td>
                      </tr>
                      <tr>
                        <td>Class</td>
                        <td>
                          {this.state.character.charclass}:{" "}
                          {this.state.character.subclass}{" "}
                          {this.state.character.patron}
                        </td>
                      </tr>
                      <tr>
                        <td>Alignment</td>
                        <td>{this.state.character.alignment}</td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Appearance</h3>
                        </td>
                      </tr>
                      <tr>
                        <td>Skin</td>
                        <td>{this.state.character.skin}</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{this.state.character.height}</td>
                      </tr>
                      <tr>
                        <td>Hair</td>
                        <td>{this.state.character.hair}</td>
                      </tr>
                      <tr>
                        <td>Eyes</td>
                        <td>{this.state.character.eyes}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="far-right">
                  <div className="bio">
                    <h2>Bio</h2>
                    <p>{this.state.character.bio}</p>
                  </div>
                  <div className="list">
                    <CampaignList
                      type="character"
                      campaign={this.state.character.campaign}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="characters-list">
            <h2>Associates</h2>
            <div className="list">
              <CharactersList
                type="character"
                campaign={this.state.character.campaign}
                id={this.state.character.id}
              />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="characters-list">
            <h2>Characters</h2>
            <CharactersList type="slider" />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
