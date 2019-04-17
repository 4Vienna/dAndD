import React from 'react';

import CharactersList from "./lists/characters-list"

const CharactersPage = props =>{
    return <div> 
        <h1> Characters</h1>
        <select>
            <option>Alpha</option>
            <option>Class</option>
            <option>Player</option>
            <option>Race</option>
            <option>Campaign</option>
        </select>
        <CharactersList />
    </div>
}

export default CharactersPage