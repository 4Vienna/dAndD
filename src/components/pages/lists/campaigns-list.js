import React, { Component } from "react";

import CamIcon from "../icons/campaign-icon";

class CampaignsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: [
        {
          id: 100,
          name: "Tomb of Annihilation",
          pic: "http://dnd.wizards.com/sites/default/files/media/tomb1.jpg",
          dm: "Jon",
          status: "Active",
          description: "The talk of the streets and taverns has all been about the so-called death curse: a wasting disease afflicting everyone who’s ever been raised from the dead. Victims grow thinner and weaker each day, slowly but steadily sliding toward the death they once denied.When they finally succumb, they can’t be raised—and neither can anyone else, regardless of whether they’ve ever received that miracle in the past. Temples and scholars of divine magic are at a loss to explain a curse that has affected the entire region, and possibly the entire world.The cause is a necromantic artifact called the Soulmonger, which is located somewhere in Chult, a mysterious peninsula far to the south, ringed with mountains and choked with rainforests.",
          by: "Wizards of the coast (Adventure design by Christopher Perkins, Will Doyle, and Steve Winter, with additional design by Adam Lee. Story consulting by the award-winning creator of Adventure Time, Pendleton Ward.)"
        },
        {
          id: 200,
          name: "Vampires",
          pic: "https://source.unsplash.com/random/100x100",
          dm: "Hyrum",
          status: "Active",
          description: "The city is becoming over run with the dead. A soldier who died in a long over war, and his band of ragtag allies must figure out how he was brought back, what happened to his missing years, and stop the Vampires who are gaining a larger and larger hold on the city. 			",
          by: "Hyrum",
        },
        {
          id: 300,
          name: "Land of Rising Magic",
          pic: "https://source.unsplash.com/random/100x100",
          dm: "Jason",
          status: "Active(Infrequent)",
          description: "An adventure in a world caught between the machinations of the cosmic hierarchy and an agent of chaos/change.",
          by: "Jason",
        },
        {
          id: 400,
          name: "Empire's Fall",
          pic: "https://source.unsplash.com/random/100x100",
          dm: "Hyrum",
          status: "Hiatus",
          description: "Peace would come to the world, even if the citizens don't think they want it. Valken is on a mission to spread the prosparity of his land to all of the world, much of the continent is already under his rule, and his influence is rapidly expanding. However, his ledgendary armer is slowly driving him insain. By the time the world is under his control, will he still be spreading peace and prosparity?",
          by: "Hyrum",
        },
        {
          id: 500,
          name: "Princes of the Apocalypse",
          pic: "http://dnd.wizards.com/sites/default/files/media/styles/product_tabletop_left/public/images/product/POTA.png?itok=VISQlpDw",
          dm: "Chris",
          status: "Active",
          description: "Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms.",
          by: "Wizards of the Coast",
        },
      ]
    };
  }

  render() {
    const campaignRecords = this.state.campaigns.map(campaign =>{
      return <CamIcon key={campaign.id} campaign={campaign} />
    })
    return <div className="list">
    {campaignRecords}
    </div>;
  }
}
export default CampaignsList;
