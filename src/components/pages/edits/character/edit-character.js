import React, { Component } from "react";

import CharactersList from "../../lists/characters-list";
import CharForm from "./char-form";

export default class EditCharacters extends Component {
  constructor() {
    super();

    this.state = {
      characterToEdit: {}
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearCharacterToEdit = this.clearCharacterToEdit.bind(this);
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

  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${
          portfolioItem.id
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          })
        });
        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick error", error);
      });
  }

  render() {
    return (
      <div>
        <div className="edit-form">
          <CharForm
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            clearCharacterToEdit={this.clearCharacterToEdit}
            handleEditClick={this.handleEditClick}
            characterToEdit={this.state.characterToEdit}
          />
        </div>
        <div className="characters-list">
          <h2>Characters</h2>
          <div className="list">
            <CharactersList
              type="edit"
              handleEditClick={this.handleEditClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
