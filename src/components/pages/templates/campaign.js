import React, { Component } from "react";

export default class Campaign extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Tomb of Annihilation</h1>
        <div className="page">
        <div className="left-column">
        </div>
        <div className="right-column">
        <div className="description">
        Description:
        </div>
        <div className="dm">
        DM:
        </div>
        <div className="characters">
        </div>
        </div>
        </div>
      </div>
    );
  }
}
