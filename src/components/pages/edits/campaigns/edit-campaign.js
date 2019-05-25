import React, { Component } from "react";

import firebase from "../../../config/fb-config";

import CampaignsList from "../../lists/campaigns-list";
import CampaignForm from "./campaign-form";

export default class EditCampaigns extends Component {
  constructor() {
    super();

    this.state = {
      campaignToEdit: {}
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearCampaignToEdit = this.clearCampaignToEdit.bind(this);
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
      .collection("campaign")
      .doc(campaign.id)
      .delete();
  }

  render() {
    return (
      <div>
        <div className="edit-form">
          <h1>Campaign</h1>
          <CampaignForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            clearCampaignToEdit={this.clearCampaignToEdit}
            campaignToEdit={this.state.campaignToEdit}
          />
        </div>
        <div className="characters-list">
          <h2>Campaigns</h2>
          <div className="list">
            <CampaignsList
              type="edit"
              handleEditClick={this.handleEditClick}
              handleDeleteClick={this.handleDeleteClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
