import React, {Component} from 'react'

import CampaignsList from './lists/campaigns-list';


class Campaigns extends Component{
render(){
return (
<div>
<h1>Campaigns</h1>
<div className="list">
<CampaignsList type="all" />
</div>
</div>
);
}
}
export default Campaigns;