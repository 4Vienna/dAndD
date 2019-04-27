import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slider from "../icons/slider";
import CamImg from "../icons/campaign-icon";
import Icon from "../icons/character-icon";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterInfo: {}
    };
  }

  render() {
    return (
      <div className="page">
        <div className="header">
          <h1 className="name">Vin</h1>
          <div className="campaign">
            <CamImg key="100" campaign="Tomb of Annihilation"
            />
          </div>
        </div>
        <div className="body">
          <div className="body-top">
            <div
              className="picture"
              style={{
                backgroundImage: `url(https://source.unsplash.com/random/100x100)`
              }}
            />
            <div className="right-column">
              <div className="top-right">
                <div className="table">
                  <h2>Basic Information</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td>Player</td>
                        <td>{<Link to="/member">Vienna</Link>}</td>
                      </tr>
                      <tr>
                        <td>Full Name</td>
                        <td> Vin</td>
                      </tr>
                      <tr>
                        <td>Race</td>
                        <td>Elf</td>
                      </tr>
                      <tr>
                        <td>Class</td>
                        <td>rouge</td>
                      </tr>
                      <tr>
                        <td>alignment</td>
                        <td>Neutral Good</td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Appearance</h3>
                        </td>
                      </tr>
                      <tr>
                        <td>Skin</td>
                        <td>Copper</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>5' 6"</td>
                      </tr>
                      <tr>
                        <td>Hair</td>
                        <td>Dark Brown, long (always braided</td>
                      </tr>
                      <tr>
                        <td>Eyes</td>
                        <td>Copper</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bio">
                  <h2>Bio</h2>
                  <p>
                    She is a quiet loner. Banished from her villiage in the
                    forests she was forced into the world of men, she quckly
                    learned that money was the only way to survive in thsi world
                    and started to use her skills in order to get as much wealth
                    as possible. Vin's only connection to her old life is a
                    sister that she routinely sends letters and money to, the
                    letters are never answered but the money doesn't get sent
                    back. kjb
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="associates">
            <h2>Associates</h2>
            <div className="associates-wrapper">
              <div className="assocaites-list">
                <h3 className="associate">Thurkir</h3>
                <h3 className="associate">Thurkir</h3>
                <h3 className="associate">Thurkir</h3>
                <h3 className="associate">Thurkir</h3>
              </div>
              <div className="associate-description">
                alksdjfa sdklfj asdkfj akdj lkasjdf;lak sj dflkajsdfl;kajsd
                lfkajsd flkajsdlfkaj lj
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <h2>Characters</h2>
          <div className="characters">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
