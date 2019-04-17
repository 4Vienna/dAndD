import React, {Component} from 'react'

import CamImg from "../../../../static/assets/images/ancient_campeign.jpg"

export default class CamIcon extends Component{
    constructor(props){
        super(props);
    
    }
    render(){
return (
<div className="Campaign-Icons"
style={{
    backgroundImage: "url(" + CamImg + ")"
}}>
<div className="campeign-info">
{this.props.name}
    </div>
</div>
);
}
}