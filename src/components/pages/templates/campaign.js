import React, { Component } from "react";
import CharacterList from "../lists/characters-list"

export default class Campaign extends Component {
  constructor(props){
    super(props)

    this.state={
      campaign:{
        id: 100,
        name: "Tomb of Annihilation",
        pic: "http://dnd.wizards.com/sites/default/files/media/tomb1.jpg",
        dm: "Jon",
        status: "Active",
        description: "The talk of the streets and taverns has all been about the so-called death curse: a wasting disease afflicting everyone who’s ever been raised from the dead. Victims grow thinner and weaker each day, slowly but steadily sliding toward the death they once denied.When they finally succumb, they can’t be raised—and neither can anyone else, regardless of whether they’ve ever received that miracle in the past. Temples and scholars of divine magic are at a loss to explain a curse that has affected the entire region, and possibly the entire world.The cause is a necromantic artifact called the Soulmonger, which is located somewhere in Chult, a mysterious peninsula far to the south, ringed with mountains and choked with rainforests.",
        by: "Wizards of the coast (Adventure design by Christopher Perkins, Will Doyle, and Steve Winter, with additional design by Adam Lee. Story consulting by the award-winning creator of Adventure Time, Pendleton Ward.)"
      }
      
    }
  }
  render() {
    return (
      <div className="page">
      <div className="body">
      <div className="header">
      <div className="picture"
        style={{
          backgroundImage: "url(" + this.state.campaign.pic + ")"
        }}>
        <h1>{this.state.campaign.name}</h1>
        </div>
        </div>
        <div className="summary">
        <h2>Description</h2>
        <div className="description">
        {this.state.campaign.description}
        </div>
        <div className="dm">
        DM:
        </div>
        <div className="created-by">
        By: {this.state.campaign.by}
        </div>
        </div>
        <div className="characters">
        <h2>Characters</h2>
        <div className="characters-list">
        </div>
        </div>
        <div className="video-slider">
        <h2>Videos</h2>
        <div className="videos">
        </div>
        </div>
      </div>
      </div>
    );
  }
}
