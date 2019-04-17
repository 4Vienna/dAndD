import React, { Component } from "react";

import CamImg from "../../../../static/assets/images/ancient_campeign.jpg";
import Icon from "../icons/character-icon";

export default class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: ["Vin", "Damian", "Jarad", "Thurkir", "Mellon", "Grungy"]
    };
  }
  render() {
    return (
      <div className="campaign">
        <h1>Tomb of Annihilation</h1>
        <div className="campaign-wrapper">
          <div
            className="images-container"
            style={{
              backgroundImage: `url(${CamImg})`
            }}
          />
          <div className="right-column">
            <div className="summary">
              <h2>Summary</h2>
              "The talk of the streets and taverns has all been about the
              so-called death curse: a wasting disease afflicting everyone who’s
              ever been raised from the dead. Victims grow thinner and weaker
              each day, slowly but steadily sliding toward the death they once
              denied. When they finally succumb, they can’t be raised—and
              neither can anyone else, regardless of whether they’ve ever
              received that miracle in the past. Temples and scholars of divine
              magic are at a loss to explain a curse that has affected the
              entire region, and possibly the entire world. The cause is a
              necromantic artifact called the Soulmonger, which is located
              somewhere in Chult, a mysterious peninsula far to the south,
              ringed with mountains and choked with rainforests."
              <div className="created-by">
                by: Wizards of the coast (Adventure design by Christopher
                Perkins, Will Doyle, and Steve Winter, with additional design by
                Adam Lee. Story consulting by the award-winning creator of
                Adventure Time, Pendleton Ward.)
              </div>
            </div>
            <div className="characters">
              <h2>Characters</h2>
              <div className="characters-list" />
            </div>
          </div>
        </div>
        <div className="video-slider">
          <h2>Videos</h2>
        </div>
      </div>
    );
  }
}
