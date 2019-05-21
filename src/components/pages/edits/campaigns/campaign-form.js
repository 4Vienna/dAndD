import React, { Component } from "react";
import firebase from "../../../config/fb-config";
import DropzoneComponent from "react-dropzone-component";

import "../../../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../../../node_modules/dropzone/dist/min/dropzone.min.css";

class CampaignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: "",
      dm: "",
      descripion: "",
      pic: "",
      members: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteImage(pic) {
    firebase
      .firestore()
      .collection("characters")
      .doc(`${character.id}/pic`)
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
      const { name, id, pic } = this.props.characterToEdit;

      this.props.clearCharacterToEdit();

      this.setState({
        name: name || "",
        id: id || "",
        pic: pic || ""
      });
    }
  }
  handlePicDrop() {
    return {
      addedfile: file => this.setState({ pic: file })
    };
  }

  handleSubmit(event) {
    let character = {
      name: this.state.name,
      id: this.state.name,
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

      pic: ""
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getMembers() {
    const db = firebase.firestore();
    var memRef = db.collection("members");
    var allmems = memRef
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

  componentDidMount() {
    this.getMembers();
  }
  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  render() {
    let dm = this.state.members.map(info => {
      return (
        <option key={info.id} value={info.id}>
          {info.name}
        </option>
      );
    });

    return (
      <form onSubmit={this.handleSubmit} className="char-form-wrapper">
        <div className="form-content">
          <div className="left-column">
            <h2>Basic Info</h2>
            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Campaign Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <h3>Dungeon Master</h3>
              <select
                type="text"
                name="dm"
                value={this.state.dm}
                onChange={this.handleChange}
              >
                {dm}
              </select>
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
                <DropzoneComponent
                  ref={this.pic}
                  config={this.componentConfig()}
                  djsConfig={this.djsConfig()}
                  eventHandlers={this.handlePicDrop()}
                >
                  <div className="dz-message">Character Pic</div>
                </DropzoneComponent>
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

export default CampaignForm;
