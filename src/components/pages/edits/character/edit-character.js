import React, { Component } from 'react'

import CharactersList from "../../lists/characters-list"
import CharForm from './char-form'

export default class EditCharacters extends Component {
  render() {
      
    return (
      <div>
          <div className="characters-list">
          <h2>Characters</h2>
          <CharactersList type="slider" />
          </div>
        <div className="edit-form">
        <CharForm/>
        </div>
      </div>
    )
  }
}
