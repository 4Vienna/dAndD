import React, { Component } from 'react';
import Large from "../icons/large"
import firebase from "../../config/fb-config"

class MembersList extends Component {
    constructor(props){
        super(props);

        this.state={
            members: []
        }
    }
    getMembers(){
      const db = firebase.firestore();
      var memRef = db.collection('members');
      var allmems = memRef.get()
    .then(snapshot => {
      let members = []
      snapshot.forEach(doc => {
        members.push({...doc.data()});
      });
      this.setState({
        members,
      })
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
  
    componentDidMount(){
      this.getMembers()
    }
    render() {
        const memberRecords = this.state.members.map(member =>{
            return <Large key={member.id} member={member} />
        })
        return (
            <div className="list">
                {memberRecords}
            </div>
        );
    }
}

export default MembersList;
