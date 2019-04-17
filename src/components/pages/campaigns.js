import React, {Component} from 'react'
import { Link } from "react-router-dom";


class Campaigns extends Component{
render(){
return (
<div>
<h1>Campaigns</h1>
<select name="Sort By">
<option>Alphabetical</option>
    <option>DM</option>
    <option>Active</option>
    <option>Inactive</option>
</select>
<div id="float-box" className="campaign-wrapper">
<Link to="/tomb">Tomb of Annihilation</Link>
</div>
</div>
);
}
}
export default Campaigns;