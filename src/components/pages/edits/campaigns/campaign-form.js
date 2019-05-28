import React, { Component } from "react";
import firebase from "../../../config/fb-config";

class CampaignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      by: "",
      id: "",
      dm: "Eli",
      description: "",
      status: "",
      pic: "",
      banner: "",
      members: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteImage(pic) {
    firebase
      .firestore()
      .collection("campaigns")
      .doc(`${this.state.id}/pic`)
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
    if (Object.keys(this.props.campaignToEdit).length > 0) {
      const {
        name,
        by,
        id,
        pic,
        dm,
        description,
        banner,
        status
      } = this.props.campaignToEdit;

      this.props.clearCampaignToEdit();

      this.setState({
        name: name || "",
        id: id || "",
        by: by || "",
        dm: dm || "Eli",
        description: description || "",
        banner: banner || "",
        pic: pic || "",
        status: status || ""
      });
    }
  }

  handleSubmit(event) {
    let campaign = {
      name: this.state.name,
      id: this.state.name.replace(/\s+/g, "-"),
      dm: this.state.dm,
      description: this.state.description,
      pic: this.state.pic,
      banner: this.state.banner
    };
    event.preventDefault();
    firebase
      .firestore()
      .collection("campaigns")
      .doc(campaign.id)
      .set(campaign, { merge: true });
    this.props.clearCampaignToEdit();
    this.setState({
      name: "",
      by: "",
      id: "",
      dm: "Eli",
      description: "",
      status: "",
      pic: "",
      banner: ""
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

  render() {
    let dm = this.state.members.map(info => {
      return (
        <option key={info.id} value={info.id}>
          {info.name}
        </option>
      );
    });

    return (
      <form onSubmit={this.handleSubmit} className="form-wrapper">
        <div className="form-content">
          <div className="left-column">
            <input
              type="text"
              name="name"
              placeholder="Campaign Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div>
              Campaign By
              <input
                type="text"
                name="by"
                placeholder="Campaign by"
                value={this.state.by}
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
            <div className="row">
              <h3>Status</h3>
              <select
                type="text"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                <option value="Active">Active</option>
                <option value="Hiatus">Hiatus</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="description">
              <textarea
                type="text"
                name="description"
                placeholder="Campaign Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="right-column">
            <div className="row">
              <div className="image-uploader">
                {this.state.pic ? (
                  <div className="image-wrapper">
                    <img src={this.state.pic} />
                    <div className="image-removal-link">
                      <a onClick={() => this.deleteImage("pic")}>Remove File</a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3>Icon Image</h3>
                    <input
                      type="url"
                      name="pic"
                      placeholder="Icon URL"
                      value={this.state.pic}
                      onChange={this.handleChange}
                    />
                  </div>
                )}
              </div>
              <div className="image-uploader">
                {this.state.banner ? (
                  <div className="image-wrapper">
                    <img src={this.state.banner} />
                    <div className="image-removal-link">
                      <a onClick={() => this.deleteImage("pic")}>Remove File</a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3>Banner Image</h3>
                    <input
                      type="url"
                      name="banner"
                      placeholder="banner URL"
                      value={this.state.banner}
                      onChange={this.handleChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="btn" type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default CampaignForm;
