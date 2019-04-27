import React, { Component } from 'react';

class MembersList extends Component {
    constructor(props){
        super(props);

        this.state={
            characters: [
                {
                  id: 00,
                  name: "Kat",
                  pic: "https://drive.google.com/open?id=0BzUH91wsZqfeT3VmZlFVOE5OazhIX3N4NnFDZmk2dU9kU0dn",
                  password: "password",
                  bio:
                    "Kat's Bio.",
                },
            ]
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MembersList;
