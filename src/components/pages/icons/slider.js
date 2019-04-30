import React, { Component } from "react";
import CharactersList from "../lists/characters-list";
import LeftArrow from "./left-arrow";
import RightArrow from "./right-arrow";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }
//only display 10 items 
  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  render() {
    return (
      <div className="slider">
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <div className="list">
          <CharactersList/>
        </div>
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
