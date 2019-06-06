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
      characters: [],
      number: 1
    };

    this.renderCharacters = this.renderCharacters.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
    this.getWidth = this.getWidth.bind(this);
  }
  renderCharacters(props) {
    let characters = this.state.characters;
    let getNum = () => {
      if (this.state.number < characters.length) {
        return Math.floor(this.state.number);
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
        slidesToShow: getNum(),
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
                    this.props.handleDeleteClick(icon), this.getCharacters();
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
    var allcharacters = charactersRef
      .get()
      .then(snapshot => {
        let characters = [];
        snapshot.forEach(doc => {
          characters.push({ ...doc.data() });
        });
        this.setState({
          characters
        });
        this.props.handleRefresh;
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  getWidth() {
    this.setState({
      number: window.innerWidth / 110
    });
  }

  componentDidMount() {
    this.getCharacters();
  }
  componentDidUpdate() {
    if (this.props.refresh == true) {
      this.getCharacters();
    } else if (this.state.number !== window.innerWidth / 110) {
      this.getWidth();
    }
  }

  render() {
    return this.renderCharacters();
  }
}
export default CharactersList;
