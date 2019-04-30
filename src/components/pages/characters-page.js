import React from 'react';

import CharactersList from "./lists/characters-list"

const CharactersPage = props =>{
    return <div className="characters-page"> 
        <h1> Characters</h1>
        <select>
            <option>Alpha</option>
            <option>Class</option>
            <option>Player</option>
            <option>Race</option>
            <option>Campaign</option>
        </select>
        <div className="characters">
        <CharactersList />
        </div>
    </div>
}

export default CharactersPage