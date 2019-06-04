import React, { Component } from "react";
import MembersList from "../lists/members-list";

class Members extends Component {
  render() {
    return (
      <div>
        <h1>Guild Members</h1>
        <div className="guild-members">
          <MembersList />
        </div>
      </div>
    );
  }
}
export default Members;
