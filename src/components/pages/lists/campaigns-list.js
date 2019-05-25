import React, { Component } from "react";
import firebase from "../../config/fb-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Medium from "../icons/medium";

class CampaignsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: []
    };
  }
  renderCampaigns(props) {
    const campaignRecords = this.state.campaigns.map(icon => {
      return <Medium key={icon.id} icon={icon} type="campaign" />;
    });
    if (this.props.type == "all") {
      return campaignRecords;
    } else if (this.props.type == "character") {
      let iconList = this.state.campaigns.map(icon => {
        if (icon.name == this.props.campaign) {
          return <Medium key={icon.id} icon={icon} type="campaign" />;
        } else {
          return;
        }
      });
      return iconList;
    } else if (this.props.type == "dm") {
      let iconList = this.state.campaigns.map(icon => {
        if (icon.dm == this.props.dm) {
          return <Medium key={icon.id} icon={icon} type="campaign" />;
        } else {
          return;
        }
      });
      return iconList;
    } else if (this.props.type == "edit") {
      const editList = this.state.campaigns.map(icon => {
        return (
          <div
            className="icons"
            key={icon.id}
            onClick={() => {
              this.props.handleEditClick(icon);
            }}
          >
            <div
              className="image"
              style={{
                backgroundImage: "url(" + icon.pic + ")"
              }}
            />
            <div className="info">
              <div className="name">{icon.name}</div>
            </div>
            <div className="delete">
              <a
                onClick={() => {
                  this.props.handleDeleteClick(icon);
                }}
              >
                <FontAwesomeIcon icon="trash" />
              </a>
            </div>
          </div>
        );
      });
      return editList;
    }
  }
  getCampaigns() {
    const db = firebase.firestore();
    var campaignsRef = db.collection("campaigns");
    var allcampaigns = campaignsRef
      .get()
      .then(snapshot => {
        let campaigns = [];
        snapshot.forEach(doc => {
          campaigns.push({ ...doc.data() });
        });
        this.setState({
          campaigns
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  componentDidMount() {
    this.getCampaigns();
  }

  render() {
    return this.renderCampaigns();
  }
}
export default CampaignsList;
