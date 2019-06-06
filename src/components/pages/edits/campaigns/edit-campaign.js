import React, { Component } from "react";

import firebase from "../../../config/fb-config";

import CampaignsList from "../../../lists/campaigns-list";
import CampaignForm from "./campaign-form";

export default class EditCampaigns extends Component {
  constructor() {
    super();

    this.state = {
      campaignToEdit: {},
      refresh: false
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearCampaignToEdit = this.clearCampaignToEdit.bind(this);
    this.campaignSubmit = this.campaignSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  campaignSubmit() {
    this.setState({
      refresh: true
    });
  }
  handleRefresh() {
    this.setState({
      refresh: false
    });
  }
  clearCampaignToEdit() {
    this.setState({
      campaignToEdit: {}
    });
  }

  handleEditClick(icon) {
    this.setState({
      campaignToEdit: icon
    });
  }

  handleDeleteClick(campaign) {
    firebase
      .firestore()
      .collection("campaigns")
      .doc(campaign.id)
      .delete();
  }

  render() {
    return (
      <div>
        <div className="edit-form">
          <h1>Campaign</h1>
          <CampaignForm
            clearCampaignToEdit={this.clearCampaignToEdit}
            campaignToEdit={this.state.campaignToEdit}
            campaignSubmit={this.campaignSubmit}
          />
        </div>
        <div className="characters-list">
          <h2>Campaigns</h2>
          <div className="list">
            <CampaignsList
              type="edit"
              handleEditClick={this.handleEditClick}
              handleDeleteClick={this.handleDeleteClick}
              refresh={this.state.refresh}
              handleRefresh={this.handleRefresh}
            />
          </div>
        </div>
      </div>
    );
  }
}
