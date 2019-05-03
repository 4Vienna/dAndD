import React, { Component } from 'react';
import firebase from "../config/fbconfig"

import Medium from "./icons/medium"

import CharactersList from "./lists/characters-list"

class CharactersPage extends Component{
    constructor(props){
        super(props);

        this.state= {
            characters: []
        }
    }
    getCharacters(){
      const db = firebase.firestore();
      var charactersRef = db.collection('characters');
      var allcharacters = charactersRef.get()
    .then(snapshot => {
      let characters = []
      snapshot.forEach(doc => {
        characters.push({...doc.data()});
      });
      this.setState({
        characters,
      })
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
  
    componentDidMount(){
      this.getCharacters()
    }

    render(){
        const characterRecords = this.state.characters.map(icon =>{
            return <Medium key={icon.id} icon={icon} type="character" />
          })
    return <div className="characters-page"> 
        <h1> Characters</h1>
        <select>
            <option>Alpha</option>
            <option>Class</option>
            <option>Player</option>
            <option>Race</option>
            <option>Campaign</option>
        </select>
        <div className="list">
        {characterRecords}
        </div>
    </div>
    }
}

export default CharactersPage