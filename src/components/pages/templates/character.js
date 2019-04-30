import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slider from "../icons/slider";
import Medium from "../icons/medium";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {
        id: 0,
          name: "Vin",
          pic: "https://lh3.googleusercontent.com/TFgcKqYrDQMF9e-PlETZ4PaDim1UvczTAZ1Vovrjen3WUhUA4hdhH7Is-wSvLxnnvhhN0zomc3mogBgL9xFnZYd5k7TNd1pbCxZAPNEAfeuuf-LRLnST9SF9FNQqemg4N3AvJUsdV1XWBw4D951LfIwZ8uxJ9nZ7AHYpfMpu0900BSv0hKPLlpXZNSgIhKuKtwInJdnUp-gU4ujDt1qy8IKaEpEB4EtWYETDcX7yr4WOdWY463zmmhf7LS6S3vFcaes5gQntMmuVybbe5NBh9gSpNH5qe4aRArYbL6UpeZ-m-YgZXXSkOy2GvJHQ2sEoMiRjOIo926VQlkDdm1KQrFT_N9efI4g-9lmwncJQma_CFJftiD2QxoLUucLMFAj54y8x4VoSW3zqlVOXyyva_Zc9V4A-yfLfJJ5ZLU9jyHMNVmgTV9a4i9_JWGTM4qEJsD-jeaiRcwsn18u8odE2XTu11xS172hT_nAHDekRkfulF_E3QBPygL_tzOP3raP-j_Ox_D-C1sbGcio98BuwcFyx8cV_opxp_vTHmZ2W4trdp8dJhZd_5Srjho752MiOsD20Mgnsnb7-kU1wMoLY_kg6Iz8oDrOR_L4Ylm_lHrSn0tE6XDw0YxHnhKwFIdd-JRWM85GLh5Xqu103YVglM93yhSwep3pGxwNvu01PoZTY6upWH1oB1p4L8fu-eqlhvM2EJvLyztvxuZDU1uU0g3eu=w569-h744-no",
          race: "Wood Elf",
          className: "Rouge/Scout",
          align: "Neutral Good",
          bio:
            "She is a quiet loner. Banished from her villiage in the forests she was forced into the world of men, she quckly learned that money was the only way to survive in thsi world and started to use her skills in order to get as much wealth as possible. Vin's only connection to her old life is a sister that she routinely sends letters and money to, the letters are never answered but the money doesn't get sent back.",
          campaign: "Tomb of Annihilation",
          player: "Kat"
      }
    };
  }

  render() {
    return (
      <div className="page">
        <div className="header">
          <h1 className="name">{this.state.character.name}</h1>
          <div className="campaign">
            <Medium key="100" campaign={this.state.character.campaign}
            />
          </div>
        </div>
        <div className="body">
          <div className="body-top">
            <div
              className="picture"
              style={{
                backgroundImage: `url(${this.state.character.pic})`
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
                        <td>{<Link to="/member/:slug">{this.state.character.player}</Link>}</td>
                      </tr>
                      <tr>
                        <td>Full Name</td>
                        <td>{this.state.character.name}</td>
                      </tr>
                      <tr>
                        <td>Race</td>
                        <td>{this.state.character.race}</td>
                      </tr>
                      <tr>
                        <td>Class</td>
                        <td>{this.state.character.class}</td>
                      </tr>
                      <tr>
                        <td>alignment</td>
                        <td>{this.state.character.align}</td>
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
                  <p>{this.state.character.bio}</p>
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
          <div className="characters-list">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
