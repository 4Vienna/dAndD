import React, { Component } from 'react';
import CharactersList from "./lists/characters-list"


class CharactersPage extends Component{
    render(){
    return <div className="characters-page"> 
        <h1> Characters</h1>
        <div className="list">
        <CharactersList type="all"/>
        </div>
    </div>
    }
}

export default CharactersPage