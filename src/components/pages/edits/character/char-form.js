import React, { Component } from 'react';
import firebase from "../../../config/fb-config"
import DropzoneComponent from "react-dropzone-component"




class CharForm extends Component {
    constructor(props){
        super(props);

        this.state={
              name: '',
              fullname: '',
              alignment: '',
              age: 0,
              race: 'Dragonborn',
              subrace: '',
              class: 'Barbarian',
              subclass: '',
              bio: '',
              height: '',
              weight: '',
              eyes: '',
              hair:'',
              skin:'',
              other: '',
            classlist: [],
            racelist: [],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    getRace(){
        const db = firebase.firestore();
        var raceRef = db.collection('race');
        var allrace = raceRef.get()
      .then(snapshot => {
        let racelist = []
        snapshot.forEach(doc => {
          racelist.push({...doc.data()});
        });
        this.setState({
          racelist,
        })
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    }
    getClass(){
        const db = firebase.firestore();
        var classRef = db.collection('class');
        var allclass = classRef.get()
      .then(snapshot => {
        let classlist = []
        snapshot.forEach(doc => {
          classlist.push({...doc.data()});
        });
        this.setState({
          classlist,
        })
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    }
      componentDidMount(){
        this.getRace()
        this.getClass()
      }

    render() {
        let characterRace = this.state.racelist.map(race =>{
            return <option key={race.id} value={race.id}>{race.name}</option>
          })
          let subRace = this.state.racelist.map(race=>{
            let current = this.state.race;
            if(race == current){
              race.subrace.map(sub=>{
                return
              })
            }
          })
          let characterClass = this.state.classlist.map(info =>{
            return <option key={info.id} value={info.id}>{info.name}</option>
          })
          let subClass = this.state.classlist.map(info =>{
            let current = this.state.class
            if (info.name == current){
              info.subclass.map(sub=>{
                return<option key={sub} value={sub}>{sub}</option>
              })
            }
          })
        return (
            <form onSubmit={this.handleSubmit} className="char-form-wrapper">
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
                <div className="main-race">
                <h3>Race</h3>
                <select
                    type="text"
                    name="race"
                    value={this.state.race}
                    onChange={this.handleChange}>
                    {characterRace}
                    </select>
                    </div>
                    <div className="subrace">
                    <h3>Subrace</h3>
                    <select
                    name="subrace"
                    value={this.state.subrace}
                    onChange={this.handleChange}>
                    {subRace}
                    </select>
                    </div>
                </div>
                <div className="row">
                <div className="main-class">
                <h3>Class</h3>
                    <select
                    type="text"
                    name="class"
                    value={this.state.class}
                    onChange={this.handleChange}>
                    {characterClass}
                    </select>
                    </div>
                    <div className="subclass">
                    <h3>Subclass</h3>
                    <select
                    name="subclass"
                    value={this.state.subclass}
                    onChange={this.handleChange}>
                    {subClass}
                    </select>
                    </div>
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
                <div>
                </div>
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
                </div>
                    <button className="btn" type="submit">Save</button>
            </div>
            </form>
        );
    }
}
            
export default CharForm;
            