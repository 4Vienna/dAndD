import React, { Component } from "react";
import firebase from "../../config/fbconfig"

import Medium from "../icons/medium";

class CampaignsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: []
    };
  }
  getCampaigns(){
    const db = firebase.firestore();
    var campaignsRef = db.collection('campaigns');
    var allcampaigns = campaignsRef.get()
  .then(snapshot => {
    let campaigns = []
    snapshot.forEach(doc => {
      campaigns.push({...doc.data()});
    });
    this.setState({
      campaigns,
    })
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}

  componentDidMount(){
    this.getCampaigns()
  }

  render() {
    const campaignRecords = this.state.campaigns.map(icon =>{
      return <Medium key={icon.id} icon={icon} type="campaign" />
    })
    return <div className="list">
    {campaignRecords}
    </div>;
  }
}
export default CampaignsList;
