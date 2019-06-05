import React, { Component } from "react";
import firebase from "../config/fb-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newannounce: "",
      type: "Rules",
      announcements: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAnnouncements = this.renderAnnouncements.bind(this);
  }

  getAnnouncements() {
    const db = firebase.firestore();
    var announceRef = db.collection("announcements");
    var allannounce = announceRef
      .get()
      .then(snapshot => {
        let announcements = [];
        snapshot.forEach(doc => {
          announcements.push({ ...doc.data() });
        });
        this.setState({
          announcements
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  renderAnnouncements(props) {
    let announcements = this.state.announcements;
    if (this.props.type == "all") {
      return announcements.map(info => {
        return (
          <li key={info.id}>
            {info.content}{" "}
            {this.props.loggedInStatus === "LOGGED_IN" ? (
              <FontAwesomeIcon
                onClick={() => this.handleDeleteClick(info)}
                className="trash-icon"
                icon="trash"
              />
            ) : null}
          </li>
        );
      });
    } else if (this.props.type == "rules") {
      return announcements.map(info => {
        if (info.type == "Rules") {
          return (
            <li key={info.id}>
              {info.content}{" "}
              {this.props.loggedInStatus === "LOGGED_IN" ? (
                <FontAwesomeIcon
                  onClick={() => this.handleDeleteClick(info)}
                  className="trash-icon"
                  icon="trash"
                />
              ) : null}
            </li>
          );
        }
      });
    }
    null;
  }

  handleSubmit() {
    let announcement = this.state.newannounce;
    let type = this.state.type;
    firebase
      .firestore()
      .collection("announcements")
      .doc(announcement)
      .set({ content: announcement, id: announcement, type: type });
    this.setState({
      newannounce: "",
      type: "Rules"
    });
    this.getAnnouncements();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleDeleteClick(info) {
    firebase
      .firestore()
      .collection("announcements")
      .doc(info.id)
      .delete();
    this.getAnnouncements();
  }

  componentDidMount() {
    this.getAnnouncements();
  }

  render() {
    return (
      <div>
        {this.renderAnnouncements()}
        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <div>
            <input
              type="text"
              name="newannounce"
              placeholder="New Announcement"
              value={this.state.newannounce}
              onChange={this.handleChange}
            />
            <select
              className="announcement-type-select"
              name="type"
              onChange={this.handleChange}
            >
              <option value="Rules">Rules</option>
              <option value="Camppaign">Campaign</option>
            </select>

            <FontAwesomeIcon
              onClick={() => this.handleSubmit()}
              className="new-announcement-button"
              icon="plus-circle"
            />
          </div>
        ) : null}
      </div>
    );
  }
}
export default Announcements;
