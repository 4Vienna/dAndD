import React, { Component } from "react";
import firebase from "../config/fb-config";

import Slider from "react-slick";
import Small from "../icons/small";
import Medium from "../icons/medium";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      characters: [],
      list: []
    };
  }
  renderCharacters(props) {
    let characters = this.state.characters;
    let num = () => {
      let wid = window.innerWidth / 110;
      if (wid < characters.length) {
        return Math.floor(wid);
      } else {
        return characters.length;
      }
    };
    const characterRecords = characters.map(icon => {
      return <Small key={icon.id} icon={icon} />;
    });
    if (this.props.type == "slider") {
      const properties = {
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: num(),
        slidesToScroll: 1
      };
      return <Slider {...properties}>{characterRecords}</Slider>;
    } else if (this.props.type == "all") {
      const medRecords = characters.map(icon => {
        return <Medium key={icon.id} icon={icon} type="character" />;
      });
      return medRecords;
    } else if (this.props.type == "campaign") {
      let iconList = this.state.characters.map(icon => {
        if (icon.campaign == this.props.campaign) {
          return <Medium key={icon.id} icon={icon} type="character" />;
        } else {
          return;
        }
      });
      return iconList;
    } else if (this.props.type == "character") {
      let iconList = this.state.characters.map(icon => {
        if (icon.id !== this.props.id && icon.campaign == this.props.campaign) {
          return <Medium key={icon.id} icon={icon} type="character" />;
        } else {
          return;
        }
      });
      return iconList;
    } else if (this.props.type == "player") {
      let iconList = this.state.characters.map(icon => {
        if (icon.player == this.props.player) {
          return <Small key={icon.id} icon={icon} />;
        } else {
          return;
        }
      });
      return iconList;
    } else if (this.props.type == "edit") {
      const editList = characters.map(icon => {
        return (
          <div
            className="icons"
            key={icon.id}
            onClick={() => {
              this.props.handleEditClick(icon);
            }}
          >
            <div
              className="image"
              style={{
                backgroundImage: "url(" + icon.pic + ")"
              }}
            />
            <div className="info">
              <div className="name">{icon.name}</div>
              <div className="delete">
                <a
                  onClick={() => {
                    this.props.handleDeleteClick(icon);
                  }}
                >
                  <FontAwesomeIcon icon="trash" />
                </a>
              </div>
            </div>
          </div>
        );
      });
      return editList;
    }
  }
  getCharacters() {
    const db = firebase.firestore();
    var charactersRef = db.collection("characters");
    charactersRef
      .get()
      .then(snapshot => {
        let characters = [];
        snapshot.forEach(doc => {
          characters.push({ ...doc.data() });
        });
        this.setState({
          characters
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  componentDidMount() {
    this.getCharacters();
  }
  componentDidUpdate() {
    this.getCharacters();
  }

  render() {
    return this.renderCharacters();
  }
}
export default CharactersList;
