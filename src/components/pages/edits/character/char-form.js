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
      subrace: "-",
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
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcec6520-ff97-472e-a52b-38131f2a77e9/dd8s3aa-482250b0-7478-4a9b-a691-62a1441fd5f2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjZWM2NTIwLWZmOTctNDcyZS1hNTJiLTM4MTMxZjJhNzdlOVwvZGQ4czNhYS00ODIyNTBiMC03NDc4LTRhOWItYTY5MS02MmExNDQxZmQ1ZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1y_abT2ssB8RWJPfwZyzZi_DuT1bFTHOBLoKJ3UFEMY",
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
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcec6520-ff97-472e-a52b-38131f2a77e9/dd8s3aa-482250b0-7478-4a9b-a691-62a1441fd5f2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjZWM2NTIwLWZmOTctNDcyZS1hNTJiLTM4MTMxZjJhNzdlOVwvZGQ4czNhYS00ODIyNTBiMC03NDc4LTRhOWItYTY5MS02MmExNDQxZmQ1ZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1y_abT2ssB8RWJPfwZyzZi_DuT1bFTHOBLoKJ3UFEMY"
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
    this.props.characterSubmit();
    this.setState({
      name: "",
      id: "",
      fullname: "",
      alignment: "",
      age: 0,
      campaign: "Empires Fall",
      player: "Eli",
      race: "Aarakcra",
      subrace: "-",
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
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcec6520-ff97-472e-a52b-38131f2a77e9/dd8s3aa-482250b0-7478-4a9b-a691-62a1441fd5f2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjZWM2NTIwLWZmOTctNDcyZS1hNTJiLTM4MTMxZjJhNzdlOVwvZGQ4czNhYS00ODIyNTBiMC03NDc4LTRhOWItYTY5MS02MmExNDQxZmQ1ZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1y_abT2ssB8RWJPfwZyzZi_DuT1bFTHOBLoKJ3UFEMY"
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
        <option key={info.id} value={info.name}>
          {info.name}
        </option>
      );
    });
    let subRace = this.state.racelist.map(info => {
      if (this.state.race == info.name) {
        return info.subrace.map(i => {
          return (
            <option key={i} value={i}>
              {i}
            </option>
          );
        });
      }
    });

    let characterClass = this.state.classlist.map(info => {
      return (
        <option key={info.id} value={info.name}>
          {info.name}
        </option>
      );
    });
    let subClass = this.state.classlist.map(info => {
      if (this.state.charclass == info.name) {
        return info.subclass.map(i => {
          return (
            <option key={i} value={i}>
              {i}
            </option>
          );
        });
      }
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
              <select
                type="text"
                name="subrace"
                value={this.state.subrace}
                onChange={this.handleChange}
              >
                {subRace}
              </select>
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
              <select
                type="text"
                name="subclass"
                value={this.state.subclass}
                onChange={this.handleChange}
              >
                {subClass}
              </select>
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
