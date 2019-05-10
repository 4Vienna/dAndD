import React, { Component } from "react";
import firebase from "../../config/fbconfig"

import Slider from "react-slick";
import Small from "../icons/small";
import Medium from "../icons/medium"



class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      list: [],
    };

  }
  renderCharacters(props){
    let characters = this.state.characters;
    const characterRecords = characters.map(icon =>{
      return <Small key={icon.id} icon={icon} />
    })
    if(this.props.type == "slider"){
      const properties = {
        infinite: true,
        dots: true,
        centerMode:true,
        arrows: true,
        slidesToShow: 10,
        slidesToScroll: 1,
      }
      return <Slider {...properties}>
      {characterRecords}
      </Slider> 
    } else if(this.props.type == "all"){
      const medRecords = characters.map(icon =>{
        return <Medium key={icon.id} icon={icon} type='character'/>
      })
      return medRecords
    } else if (this.props.type == "campaign"){
      let iconList = this.state.characters.map(icon=>{
        if (icon.campaign == this.props.campaign){
        return <Medium key={icon.id} icon={icon} type="character"/>
        }else{
          return
        }
      })
      return iconList
    }else if (this.props.type == "character"){
      let iconList = this.state.characters.map(icon=>{
        if (icon.id !== this.props.id && icon.campaign == this.props.campaign){
        return <Medium key={icon.id} icon={icon} type="character"/>
        }else{
          return
        }
      })
      return iconList
    }else if( this.props.type == 'player'){
      let iconList = this.state.characters.map(icon=>{
        if ( icon.player == this.props.player){
        return <Small key={icon.id} icon={icon}/>
        }else{
          return
        }
      })
      return iconList
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

  render() {
    return this.renderCharacters()
  }
}
export default CharactersList;
