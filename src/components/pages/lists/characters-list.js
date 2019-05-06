import React, { Component } from "react";
import firebase from "../../config/fbconfig"

import Slider from "react-slick";
import Small from "../icons/small";



class CharactersList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };

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

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    const properties = {
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 10,
      slidesToScroll: 1
    }
    const characterRecords = this.state.characters.map(icon =>{
      return <Small key={icon.id} icon={icon} />
    })
    return <Slider {...properties}>
    {characterRecords}
    </Slider>
  }
}
export default CharactersList;
