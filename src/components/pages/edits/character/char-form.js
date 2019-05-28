import React, { Component } from "react";
import firebase from "../../../config/fb-config";

class CharForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: "",
      fullname: "",
      alignment: "",
      age: 0,
      campaign: "Empires Fall",
      player: "Eli",
      race: "Aarakcra",
      subrace: "",
      charclass: "Barbarian",
      subclass: "",
      patron: "",
      bio: "",
      height: "",
      weight: "",
      eyes: "",
      hair: "",
      skin: "",
      other: "",
      pic:
        "https://lh3.googleusercontent.com/m8xVtGYOTorBiE2G40kR4sceR1vFoOp5KyJPW-05e0Xxh27t4p38PPiA3qhg6ZdOzNeMUvM6toVEjMIjjkFpnX5SYemUlHXl5DO9JDN5Qre8kV3bYCBiAW8BNE5b3-LrXRG74Au-VjEbDMGUWIS5wCaG8CLuQEgviI-CoTX8m_jUtUyclmWdgiwjpB3tBSfBkuYb7mWygdSW9-M91qiVhj5H6PrEvB7NSf0KWDZzpA3BvWBU-8Qyha1sbELm_d3rKIC-kj1VWpvKQX8PGOGshL0GBIlEO_lL2kN0O2ALtOi-cabB2pe9TKkxfd_gTYs8A7-YDt98tNSqf-AO-TI165Gq_wRqZOGpbZ_6BQrh7BpuOd0izWITxx3Kh9njYbH6zcGMhGUqC7Zf2JIhz1dRsAdoYTYj5UzaaPBgqoEsy49M3jAza82aySrx_srPnefzjzwqIJdxJQvUmoS7LUSPlr3GSgc6AiKNehNjzVIFWWRAT_TmAyH1zWgvpiHWZKuAdd17WHohdrybvIbcV09qWOuedIyY98RzJM_hM9AMSwbGxb9bH8vJM07eJS75L2XVfbh3WAdjOmlECq09n0eGvr2JtlqbpvuVR4-Ais8hK0qHyAQ1jub41jWMm4WJRS7iBmdBPE7ihWoXnh_QnlM2GpjUqlTRH5bv5ctXtos9zX2mLSn79KzIHzQtWuYxoEbMKMLGxSvCWu6qBEfdupAvBp0=s225-no",
      classlist: [],
      racelist: [],
      campaignslist: [],
      members: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteImage(pic) {
    firebase
      .firestore()
      .collection("characters")
      .doc(`${this.state.id / pic.FieldValue}`)
      .delete()
      .then(response => {
        this.setState({
          [pic]: ""
        });
      })
      .catch(error => {
        console.log("deleteImage error", error);
      });
  }

  componentDidUpdate() {
    if (Object.keys(this.props.characterToEdit).length > 0) {
      const {
        name,
        id,
        fullname,
        alignment,
        age,
        campaign,
        player,
        race,
        subrace,
        charclass,
        subclass,
        patron,
        bio,
        height,
        weight,
        eyes,
        hair,
        skin,
        other,
        pic
      } = this.props.characterToEdit;

      this.props.clearCharacterToEdit();

      this.setState({
        name: name || "",
        id: id || "",
        fullname: fullname || "",
        alignment: alignment || "",
        age: age || 0,
        campaign: campaign || "Empires Fall",
        player: player || "Eli",
        race: race || "Aarakcra",
        subrace: subrace || "",
        charclass: charclass || "Barbarian",
        subclass: subclass || "Path of the Berserker",
        patron: patron || "",
        bio: bio || "",
        height: height || "",
        weight: weight || "",
        eyes: eyes || "",
        hair: hair || "",
        skin: skin || "",
        other: other || "",
        pic:
          pic ||
          "https://lh3.googleusercontent.com/m8xVtGYOTorBiE2G40kR4sceR1vFoOp5KyJPW-05e0Xxh27t4p38PPiA3qhg6ZdOzNeMUvM6toVEjMIjjkFpnX5SYemUlHXl5DO9JDN5Qre8kV3bYCBiAW8BNE5b3-LrXRG74Au-VjEbDMGUWIS5wCaG8CLuQEgviI-CoTX8m_jUtUyclmWdgiwjpB3tBSfBkuYb7mWygdSW9-M91qiVhj5H6PrEvB7NSf0KWDZzpA3BvWBU-8Qyha1sbELm_d3rKIC-kj1VWpvKQX8PGOGshL0GBIlEO_lL2kN0O2ALtOi-cabB2pe9TKkxfd_gTYs8A7-YDt98tNSqf-AO-TI165Gq_wRqZOGpbZ_6BQrh7BpuOd0izWITxx3Kh9njYbH6zcGMhGUqC7Zf2JIhz1dRsAdoYTYj5UzaaPBgqoEsy49M3jAza82aySrx_srPnefzjzwqIJdxJQvUmoS7LUSPlr3GSgc6AiKNehNjzVIFWWRAT_TmAyH1zWgvpiHWZKuAdd17WHohdrybvIbcV09qWOuedIyY98RzJM_hM9AMSwbGxb9bH8vJM07eJS75L2XVfbh3WAdjOmlECq09n0eGvr2JtlqbpvuVR4-Ais8hK0qHyAQ1jub41jWMm4WJRS7iBmdBPE7ihWoXnh_QnlM2GpjUqlTRH5bv5ctXtos9zX2mLSn79KzIHzQtWuYxoEbMKMLGxSvCWu6qBEfdupAvBp0=s225-no"
      });
    }
  }

  handleSubmit(event) {
    let character = {
      name: this.state.name,
      id: this.state.name,
      fullname: this.state.fullname,
      name: this.state.name,
      alignment: this.state.alignment,
      age: this.state.age,
      campaign: this.state.campaign,
      player: this.state.player,
      race: this.state.race,
      subrace: this.state.subrace,
      charclass: this.state.charclass,
      subclass: this.state.subclass,
      patron: this.state.patron,
      bio: this.state.bio,
      height: this.state.height,
      weight: this.state.weight,
      eyes: this.state.eyes,
      hair: this.state.hair,
      skin: this.state.skin,
      other: this.state.other,
      pic: this.state.pic
    };
    event.preventDefault();
    firebase
      .firestore()
      .collection("characters")
      .doc(this.state.name)
      .set(character, { merge: true });
    this.props.clearCharacterToEdit();
    this.setState({
      name: "",
      id: "",
      fullname: "",
      alignment: "",
      age: 0,
      campaign: "Empires Fall",
      player: "Eli",
      race: "Aarakcra",
      subrace: "",
      charclass: "Barbarian",
      subclass: "Path of the Berserker",
      patron: "",
      bio: "",
      height: "",
      weight: "",
      eyes: "",
      hair: "",
      skin: "",
      other: "",
      pic:
        "https://lh3.googleusercontent.com/m8xVtGYOTorBiE2G40kR4sceR1vFoOp5KyJPW-05e0Xxh27t4p38PPiA3qhg6ZdOzNeMUvM6toVEjMIjjkFpnX5SYemUlHXl5DO9JDN5Qre8kV3bYCBiAW8BNE5b3-LrXRG74Au-VjEbDMGUWIS5wCaG8CLuQEgviI-CoTX8m_jUtUyclmWdgiwjpB3tBSfBkuYb7mWygdSW9-M91qiVhj5H6PrEvB7NSf0KWDZzpA3BvWBU-8Qyha1sbELm_d3rKIC-kj1VWpvKQX8PGOGshL0GBIlEO_lL2kN0O2ALtOi-cabB2pe9TKkxfd_gTYs8A7-YDt98tNSqf-AO-TI165Gq_wRqZOGpbZ_6BQrh7BpuOd0izWITxx3Kh9njYbH6zcGMhGUqC7Zf2JIhz1dRsAdoYTYj5UzaaPBgqoEsy49M3jAza82aySrx_srPnefzjzwqIJdxJQvUmoS7LUSPlr3GSgc6AiKNehNjzVIFWWRAT_TmAyH1zWgvpiHWZKuAdd17WHohdrybvIbcV09qWOuedIyY98RzJM_hM9AMSwbGxb9bH8vJM07eJS75L2XVfbh3WAdjOmlECq09n0eGvr2JtlqbpvuVR4-Ais8hK0qHyAQ1jub41jWMm4WJRS7iBmdBPE7ihWoXnh_QnlM2GpjUqlTRH5bv5ctXtos9zX2mLSn79KzIHzQtWuYxoEbMKMLGxSvCWu6qBEfdupAvBp0=s225-no"
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  getRace() {
    const db = firebase.firestore();
    var raceRef = db.collection("race");
    raceRef
      .get()
      .then(snapshot => {
        let racelist = [];
        snapshot.forEach(doc => {
          racelist.push({ ...doc.data() });
        });
        this.setState({
          racelist
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  getCampaigns() {
    const db = firebase.firestore();
    var camRef = db.collection("campaigns");
    camRef
      .get()
      .then(snapshot => {
        let campaignslist = [];
        snapshot.forEach(doc => {
          campaignslist.push({ ...doc.data() });
        });
        this.setState({
          campaignslist
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  getMembers() {
    const db = firebase.firestore();
    var memRef = db.collection("members");
    memRef
      .get()
      .then(snapshot => {
        let members = [];
        snapshot.forEach(doc => {
          members.push({ ...doc.data() });
        });
        this.setState({
          members
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  getClass() {
    const db = firebase.firestore();
    var classRef = db.collection("class");
    classRef
      .get()
      .then(snapshot => {
        let classlist = [];
        snapshot.forEach(doc => {
          classlist.push({ ...doc.data() });
        });
        this.setState({
          classlist
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  componentDidMount() {
    this.getRace();
    this.getClass();
    this.getCampaigns();
    this.getMembers();
  }

  render() {
    let characterPlayer = this.state.members.map(info => {
      return (
        <option key={info.id} value={info.name}>
          {info.name}
        </option>
      );
    });
    let characterCampaign = this.state.campaignslist.map(info => {
      return (
        <option key={info.name} value={info.name}>
          {info.name}
        </option>
      );
    });
    let characterRace = this.state.racelist.map(info => {
      return (
        <option key={info.id} value={info.id}>
          {info.name}
        </option>
      );
    });

    let characterClass = this.state.classlist.map(info => {
      return (
        <option key={info.id} value={info.name}>
          {info.name}
        </option>
      );
    });
    return (
      <form onSubmit={this.handleSubmit} className="form-wrapper">
        <div className="form-content">
          <div className="left-column">
            <h2>Basic Info</h2>
            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Character Name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <h3>Campaign</h3>
              <select
                type="text"
                name="campaign"
                value={this.state.campaign}
                onChange={this.handleChange}
              >
                {characterCampaign}
              </select>
              <h3>Player</h3>
              <select
                type="text"
                name="player"
                value={this.state.player}
                onChange={this.handleChange}
              >
                {characterPlayer}
              </select>
            </div>
            <div className="row">
              <div>
                Alignment
                <input
                  type="text"
                  name="alignment"
                  placeholder="Alignment"
                  value={this.state.alignment}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Age
                <input
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <h3>Race</h3>
              <select
                type="text"
                name="race"
                value={this.state.race}
                onChange={this.handleChange}
              >
                {characterRace}
              </select>
              <h3>Subrace</h3>
              <input
                type="text"
                name="subrace"
                value={this.state.subrace}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <h3>Class</h3>
              <select
                type="text"
                name="charclass"
                value={this.state.charclass}
                onChange={this.handleChange}
              >
                {characterClass}
              </select>
              <h3>Subclass</h3>
              <input
                type="text"
                name="subclass"
                value={this.state.subclass}
                onChange={this.handleChange}
              />
            </div>
            <div className="bio">
              <textarea
                type="text"
                name="bio"
                placeholder="Character Bio"
                value={this.state.bio}
                onChange={this.handleChange}
              />
            </div>
            <div />
          </div>
          <div className="right-column">
            <h2>Appearence</h2>
            <div className="appearance-wrapper">
              <div className="row">
                <div className="hair-wrapper">
                  Hair
                  <input
                    type="text"
                    name="hair"
                    placeholder="hair"
                    value={this.state.hair}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="eyes-wrapper">
                  Eyes
                  <input
                    type="text"
                    name="eyes"
                    placeholder="Eye Color"
                    value={this.state.eyes}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="skin-wrapper">
                  Skin
                  <input
                    type="text"
                    name="skin"
                    placeholder="skin"
                    value={this.state.skin}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="height-wrapper">
                Height
                <input
                  type="text"
                  name="height"
                  placeholder="5'8"
                  value={this.state.height}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Weight
                <input
                  type="text"
                  name="weight"
                  placeholder="100lbs"
                  value={this.state.weight}
                  onChange={this.handleChange}
                />
              </div>
              <div className="characteristics">
                Other Characteristics
                <input
                  type="text"
                  name="other"
                  placeholder="Other physical Characteristics"
                  value={this.state.other}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="image-uploader">
              {this.state.pic ? (
                <div className="portfolio-manager-image-wrapper">
                  <img src={this.state.pic} />
                  <div className="image-removal-link">
                    <a onClick={() => this.deleteImage("pic")}>Remove File</a>
                  </div>
                </div>
              ) : (
                <input
                  type="url"
                  name="pic"
                  placeholder="Icon URL"
                  value={this.state.pic}
                  onChange={this.handleChange}
                />
              )}
            </div>
          </div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default CharForm;
