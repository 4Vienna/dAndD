import React, { Component } from "react";

import firebase from "../../../config/fb-config";

import CharactersList from "../../../lists/characters-list";
import CharForm from "./char-form";

export default class EditCharacters extends Component {
  constructor() {
    super();

    this.state = {
      characterToEdit: {},
      refresh: false
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearCharacterToEdit = this.clearCharacterToEdit.bind(this);
    this.characterSubmit = this.characterSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  characterSubmit() {
    this.setState({
      refresh: true
    });
  }
  handleRefresh() {
    this.setState({
      refresh: false
    });
  }

  clearCharacterToEdit() {
    this.setState({
      characterToEdit: {}
    });
  }

  handleEditClick(icon) {
    this.setState({
      characterToEdit: icon
    });
  }

  handleDeleteClick(character) {
    firebase
      .firestore()
      .collection("characters")
      .doc(character.id)
      .delete();
  }

  render() {
    return (
      <div>
        <div className="edit-form">
          <CharForm
            clearCharacterToEdit={this.clearCharacterToEdit}
            characterToEdit={this.state.characterToEdit}
            characterSubmit={this.characterSubmit}
          />
        </div>
        <div className="characters-list">
          <h2>Characters</h2>
          <div className="list">
            <CharactersList
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
