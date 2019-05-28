import React, { Component } from "react";

import Announcements from "./announcements";

class Rules extends Component {
  render() {
    return (
      <div className="rules">
        <h1>Rules as Written</h1>
        <div className="description">
          Rules as Written is a series by Jacen, evaluating specific rules and
          why they don't work the way the are written. This show will also look
          at how to exploit rules to work in your favor.
        </div>
        <div className="body">
          <div className="announcements">
            <h2>Announcements</h2>
            <Announcements
              loggedInStatus={this.props.loggedInStatus}
              type="rules"
            />
          </div>
          <div className="episodes">
            <div className="podcast-list">
              <h2>Podcasts</h2>
              <div className="podcasts-list">Coming Soon!</div>
              <h2>Videos</h2>
              <div className="video-list">Coming Soon!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Rules;
