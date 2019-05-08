import React, { Component } from 'react';
import firebase from "../../../config/fbconfig"
import DropzoneComponent from "react-dropzone-component"




class CharForm extends Component {
    constructor(props){
        super(props);

        this.state={
            characters: [],
            character: {
                name: '',
                fullname: '',
                race: 'Dragonborn',
                subrace: '',
                class: 'Barbarian',
                bio: ''
            },
            charclass: [],
            race: [],
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
        let race = []
        snapshot.forEach(doc => {
          race.push({...doc.data()});
        });
        this.setState({
          race,
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
        let charclass = []
        snapshot.forEach(doc => {
          charclass.push({...doc.data()});
        });
        this.setState({
          charclass,
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
        let characterRace = this.state.race.map(race =>{
            return <option key={race.id} value={race.id}>{race.name}</option>
          })
          let characterClass = this.state.charclass.map(info =>{
            return <option key={info.id} value={info.id}>{info.name}</option>
          })
        return (
            <form onSubmit={this.handleSubmit} className="char-form-wrapper">
            <div className="form-content">
            <div className="left-column">
            <h2>Basic Info</h2>
                <div className="name">
                    <input
                    type="text"
                    name="name"
                    placeholder="Character Name"
                    value={this.state.character.name}
                    onChange={this.handleChange}
                    />

                    <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={this.state.character.fullname}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="race">
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
                    name="class"
                    value={this.state.race.subrace}
                    onChange={this.handleChange}>
                    <option value="forrest">Forrest</option>
                    <option value="hill">Hill</option>
                    <option value="black">Black</option>
                    </select>
                    </div>
                </div>
                <div className="class">
                <div className="main-class">
                <h3>Class</h3>
                    <select
                    type="text"
                    name="class"
                    value={this.state.charclass}
                    onChange={this.handleChange}>
                    {characterClass}
                    </select>
                    </div>
                    <div className="subclass">
                    <h3>Subclass</h3>
                    <select
                    name="class"
                    value={this.state.charclass.subclass}
                    onChange={this.handleChange}>
                    <option value="forrest">Forrest</option>
                    <option value="hill">Hill</option>
                    <option value="black">Black</option>
                    </select>
                    </div>
                </div>
                <div className="bio">
                    <textarea
                    type="text"
                    name="bio"
                    placeholder="Character Bio"
                    value={this.state.character.bio}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                </div>
                </div>
                <div className="right-column">
                <h2>Appearence</h2>
                hair
                <input
                    type="text"
                    name="hair"
                    placeholder="hair"
                    value={this.state.character.hair}
                    onChange={this.handleChange}
                    />
                eyes 
                <input
                    type="text"
                    name="eyes"
                    placeholder="Eye Color"
                    value={this.state.character.eyes}
                    onChange={this.handleChange}
                    />
                <input
                    type="text"
                    name="skin"
                    placeholder="skin"
                    value={this.state.character.skin}
                    onChange={this.handleChange}
                    />
                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    value={this.state.character.height}
                    onChange={this.handleChange}
                    />
                <input
                    type="text"
                    name="weight"
                    placeholder="weight"
                    value={this.state.character.weight}
                    onChange={this.handleChange}
                    />
                <input
                    type="text"
                    name="other"
                    placeholder="Other physical Characteristics"
                    value={this.state.character.other}
                    onChange={this.handleChange}
                    />
                </div>
                    <button className="btn" type="submit">Save</button>
            </div>
            </form>
        );
    }
}
            
export default CharForm;
            