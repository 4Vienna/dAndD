import React, { Component } from "react";

import CharacterIcon from "../icons/character-icon";

class CharactersList extends Component {
  constructor() {
    super();

    this.state = {
      characters: [
        {
          id: 0,
          name: "Vin",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Wood Elf",
          className: "Rouge/Scout",
          align: "Neutral Good",
          bio:
            "She is a quiet loner. Banished from her villiage in the forests she was forced into the world of men, she quckly learned that money was the only way to survive in thsi world and started to use her skills in order to get as much wealth as possible. Vin's only connection to her old life is a sister that she routinely sends letters and money to, the letters are never answered but the money doesn't get sent back.",
          campaign: "Tomb of Annihilation",
          player: "Kat"
        },
        {
          id: 1,
          name: "Jared",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Asimir",
          className: "Forge Cleric",
          align: "Lawful Good",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Eli"
        },
        {
          id: 2,
          name: "Thurkear",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Dragonborn",
          className: "Death Cleric",
          align: "Lawful Evil",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Jacon"
        },
        {
          id: 3,
          name: "Damian",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Teifling",
          className: "Sorcerer",
          align: "Chaotic Neutral",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Hyrum"
        },
        {
          id: 4,
          name: "Mellon",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Furbolg",
          className: "Swamp Druid",
          align: "Neutral Neutral",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Hyrum"
        },
        {
          id: 5,
          name: "Grungy",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Mountain Dwarf",
          className: "Fighter",
          align: "Chaotic Good",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Chris"
        },
        {
          id: 6,
          name: "Ella",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Gnome",
          className: "Warlock",
          align: "Chaotic Neutral",
          bio: "Things about her",
          campaign: "Vampires",
          player: "Kat"
        },
        {
          id: 7,
          name: "Kitchriss",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Human",
          class: "Fighter/Arcain Archer",
          align: "Neutral Evil",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Hyrum"
        },
        {
          id: 8,
          name: "Jacob",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Human",
          className: "Bard collage of Swords",
          align: "Chaotic Neutral",
          bio: "Things about him",
          campaign: "Vampires",
          player: "Jacon"
        },
        {
          id: 9,
          name: "Sebastian",
          pic: "https://source.unsplash.com/random/100x100",
          race: "Human",
          className: "Fighter/Cavalier",
          align: "Lawful Neutral",
          bio: "Things about him",
          campaign: "Vampires",
          player: "Hyrum"
        }
      ]
    };
  }

  render() {
    const characterRecords = this.state.characters.map(character =>{
      return <CharacterIcon key={character.id} character={character} />
    })
    return <div className="list">
    {characterRecords}
    </div>;
  }
}
export default CharactersList;
