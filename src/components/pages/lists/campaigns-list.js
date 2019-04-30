import React, { Component } from "react";

import Small from "../icons/small";
import Medium from "../icons/medium";
import Large from "../icons/large"

class CampaignsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: [
        {
          id: 100,
          name: "Tomb of Annihilation",
          pic: "http://dnd.wizards.com/sites/default/files/media/tomb1.jpg",
          dm: "John",
          status: "Active",
          description: "The talk of the streets and taverns has all been about the so-called death curse: a wasting disease afflicting everyone who’s ever been raised from the dead. Victims grow thinner and weaker each day, slowly but steadily sliding toward the death they once denied.When they finally succumb, they can’t be raised—and neither can anyone else, regardless of whether they’ve ever received that miracle in the past. Temples and scholars of divine magic are at a loss to explain a curse that has affected the entire region, and possibly the entire world.The cause is a necromantic artifact called the Soulmonger, which is located somewhere in Chult, a mysterious peninsula far to the south, ringed with mountains and choked with rainforests.",
          by: "Wizards of the coast (Adventure design by Christopher Perkins, Will Doyle, and Steve Winter, with additional design by Adam Lee. Story consulting by the award-winning creator of Adventure Time, Pendleton Ward.)"
        },
        {
          id: 200,
          name: "Vampires",
          pic: "https://images.unsplash.com/photo-1528535619428-a995242b9096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          dm: "Gideon",
          status: "Active",
          description: "The city is becoming over run with the dead. A soldier who died in a long over war, and his band of ragtag allies must figure out how he was brought back, what happened to his missing years, and stop the Vampires who are gaining a larger and larger hold on the city. 			",
          by: "Gideon",
        },
        {
          id: 300,
          name: "Land of Rising Magic",
          pic: "https://lh3.googleusercontent.com/Rg4mh2b5nHyNw_1lnk8ceSXSVPIxjQwCOWhGTdlBKN9n6qWH7prqqqMcP6BEEY051nOzO93fLmJobeoCvyKOEhBM5WunqXXHwvN0SAP_OCvdWpy15PQqftSRtLJYCTPfXhNmTS6Ozeka7YcBpmqfPFO6fGl_8WbW4nhfp8_thSN3rj1O4t4gu8BhNNPJl5N2Iffzt2KPSmZ9vvTF-qwfM1O9Aucl4TssUdk1QP0xTTaG_tSzJxw0vZuTPcsHP4rrz5S8d43FKOhN4Df2J2l-SZBlSxfiHKg1Zj1G2EHAT7MU6M1Eg8ygJHmlBFFgGIEKQ9SUqDA8L2JvQLosIXJYxdO6dKVOUgy45ukkHxMqlrKz7jcg0mHCYaRk4mt-xaMflMEP6_ibzc8ahWV3EeBFjv6TLwF47mVVykcVFbN4OxT4bnxRnzKrJ1rAlalgWZMZJAgQiq3PZ8lpaqxWyNsiu9av1XMwMd5FYJ-qxwGa18S418x54l9FmjjIUR-858HYkQHvhrkcYStyJH8weasEG953n8mVtkhHijrVBev8Pmjdh8iz5NucyB24Md9IClFHNld_oBb2KKTVURvhaS6DU9FBWTLnMyZMOlteXmrryqFux4w2ithvIkVQMgF-UaX_k7zGH9lmU0jggKLKrx4vkyPXltdt5kOR00xPLvVKJzbRQEGqQ2pA2tX8RfT3eU0d1HQtwbuMGSW_8qatX8EvrRed=s225-no",
          dm: "Jacen",
          status: "Active(Infrequent)",
          description: "An adventure in a world caught between the machinations of the cosmic hierarchy and an agent of chaos/change.",
          by: "Jacen",
        },
        {
          id: 400,
          name: "Empire's Fall",
          pic: "https://lh3.googleusercontent.com/5kFhAJpS5YJA-sd24UEXif88Dn9CGi3KqrQcIBQ7As7UC6FqLxibHC5h66x86PTP7R9tozkhDQzyXGFYBBCvmdxb_o0RkATD7Maa2URwclTD1H8XxGMnP1RQ3Q0bultH9fZDbQQWBcDPIvzkzamFk7gufHW4D45rbT0MVSb-jL37OqGEZZBxgODSGreawgai9Ab_P0QiZMQF3hiUyqFgpyGtRhqXuPdmuvUKxgIVrl70oM7f7E9tqpTf2muRcBh7DjnMRWD5AFOiEIpMd_8b22VJNxfzQ6R0MJsaIfgPZ5ZDcTeX2TCUkiGvcZjlv4AxfBuFExjhddYJmVg_OUuLEwWWqGU_2k-WcnxCjC7jPa7Tpr6AzxODKQ18NJFbfejvVxQlsoeNtlgbCleMzYisHqMaG0C_fx4bU02M8NZr1ra3pURJK9D209ZZeoAsFSMVrWOYOEn_edt5SKN4YggHFywLW1mg6_k5ztTPAMXSzZMs8nP0s0byjPm7z9ivEsBMRTnTv2lH2Qj97-U7OO5yalOVOl5_q7NQ5XwA0FeRPoWmHQcpAHRXOG4C7gaZtFnEeiTJ6ksPwz7KFmdXxaz-uhF33Uhy46dbVCbutOxiawdGx7gqG0hvEPsE0yABnV1YUZXHMMJf0QkvanoMh7u-PZYWt-29Tm4Za5uP4dnwcoh73gg0euqzwzjz03LIO6RiSXHxVsUtafPQXPN8-Yhl90_x=w494-h740-no",
          dm: "Gideon",
          status: "Hiatus",
          description: "Peace would come to the world, even if the citizens don't think they want it. Valken is on a mission to spread the prosparity of his land to all of the world, much of the continent is already under his rule, and his influence is rapidly expanding. However, his ledgendary armer is slowly driving him insain. By the time the world is under his control, will he still be spreading peace and prosparity?",
          by: "Gideon",
        },
        {
          id: 500,
          name: "Princes of the Apocalypse",
          pic: "https://lh3.googleusercontent.com/eYZp1SLzL7eI1TWFa9tMak2rxNhySbFor8ShyyE4Tmky05WJsNv56eM4y3VsKPf8_FHFUBS7MDuhOtgHzndfelDm5P11SKD3cSR33I7OO0UqTmNdpxqykyxtwY--sSjM5ItHpzxOEjADS2aDDr2c7DSSDTs4Vfk0VKxlmACWheZg-MTbLISZxyzvCBX9gWMe5pAPdLlgOVbcR2h_mpyi1AUdeZxN8QWGMBNMrevN12HAQtEnxJm3GakvPs6rgdKDnUYy0b8ZHPOvQckCp8NEXCqVd3dKaNC4L8Dgmv18mlmQMTNIbFVsE42PlZGv_J4ts9MzNHVujTxP1DT9tUWchxozfEOILVL8dhZSF06UxLt7siW9w8TH1ZIAmdQgPiBLPzDN4cNIK7B2l3Krbtv-fSQmlMG3LGHVNqWPPLaL4tLguVFIZ0U2WJyxHoSpKgVNtL9Y25hGFW5wICK9F5x9ZtR88LAPuGXR-8LteCMacyFX_OcwBuGLN9noUKayODROe60gn5TaudYy6EpTFuhYyNu0dGT6KGAoqkYbv-vrbbW1vX3S7VFR3tsTeH8tlZfzdWpSY_BF4tTjLt4uQ2vTCTNhHHReO3N1KGuWajl9-GcnXV6aPR6pqerq_yLqFyabDxvc2RLhjEhyABYTeBw-K2b3UEkSSU3axx6wYdflGxWaxyPIIMXXQMN43TIhz0x-lI18eesPBmsax-otOqVqH2Op=w713-h600-no",
          dm: "Kris",
          status: "Active",
          description: "Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms.",
          by: "Wizards of the Coast",
        },
      ]
    };
  }

  render() {
    const campaignRecords = this.state.campaigns.map(campaign =>{
      return <Medium key={campaign.id} campaign={campaign} />
    })
    return <div className="list">
    {campaignRecords}
    </div>;
  }
}
export default CampaignsList;
