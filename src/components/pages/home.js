import React, { Component } from "react";
import firebase from "../config/fbconfig"


import CharactersList from "./lists/characters-list";
import CampaignsList from "./lists/campaigns-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      announcements:[]
    }
  }
  getAnnouncements(){
    const db = firebase.firestore();
    var announceRef = db.collection('announcements');
    var allannounce = announceRef.get()
  .then(snapshot => {
    let announcements = []
    snapshot.forEach(doc => {
      announcements.push({...doc.data()});
    });
    this.setState({
      announcements,
    })
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}

  componentDidMount(){
    this.getAnnouncements()
  }

  render() {
    const announce = this.state.announcements.map(info =>{
      return <li key={info.id}>{info.content}</li>
    })
    return (
      <div className="home">
        <div className="header">
          <h1>Basement Dwellers Guild</h1>
          <div className="carasol">
            <CharactersList type="slider" />
          </div>
        </div>
        <div className="body">
          <div className="announcements-wrapper">
            <h2>Announcements:</h2>
            <div className="announcement">
              {announce}
            </div>
          </div>
          <div className="calendar">
            <h2>Calendar</h2>
            <div className="calendar-frame">
            <iframe src="https://calendar.google.com/calendar/b/3/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=275&amp;wkst=1&amp;bgcolor=%23666666&amp;src=jcd9d24otcuuiedh5d7g596mjg%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FDenver"></iframe>
            </div>
          </div>
        </div>
        <div id="float-box" className="campaigns-wrapper">
          <h2>Campaigns</h2>
          <div className="campaign-icons">
            <CampaignsList />
          </div>
        </div>
      </div>
    );
  }
}
