import React, { Component } from "react";
import firebase from "../config/fb-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newannounce: "",
      announcements: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let announcement = this.state.newannounce;
    firebase
      .firestore()
      .collection("announcements")
      .doc(announcement)
      .set({ content: announcement, id: announcement });
    this.setState({
      newannounce: ""
    });
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

  componentDidMount() {
    this.getAnnouncements();
  }
  componentDidUpdate() {
    this.getAnnouncements();
  }
  render() {
    const announce = this.state.announcements.map(info => {
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
    return (
      <div className="announcement">
        {announce}
        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <div>
            <input
              type="text"
              name="newannounce"
              placeholder="New Announcement"
              value={this.state.newannounce}
              onChange={this.handleChange}
            />
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
