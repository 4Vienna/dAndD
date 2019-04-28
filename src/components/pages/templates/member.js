import React, { Component } from 'react'

export default class Member extends Component {
  constructor(props){
    super(props)

    this.state={
      member:{
        id: 10,
        name: "Kat",
        pic: "https://lh3.googleusercontent.com/MqB42Wh3IIIrAdjvfohwpyRvwBvA8xH5fQuIOm5eJEyPgU5Q2QSH3ei4UF_Tx0yyMPlFMeTXGKvFIX7k1KFagqFw9PWmWztk-htJGZtzPhYkWPWAkYuKq6W2HO5SeVGN4tyfMDmeRIYBs-Q4QVZWTzPUxVt8QOB3DmwVT-ESXEDHxqBB2XQ0-CYnWvHMKlefr-92NzBhI-kQSfWgF1oe5QWI5tSYfooE0eMggZQ2Mmh8fmIjjiRFsGYT-_ey8ZPzvZubE4ErCAiposun3-SxTQkpqSVEH2B_0NjsANmqGRf7wCNv_9Prd_vT2JotrwZCc8VJGXnv2lO5DNX02WHxn-vKT_pRBMTtwhEAix0gf3WeMgMgg-03ZzOeYZDPsWAmtJFHLll-yP-Wv1PYgP7n_QE9ZHk6-OkwUS-4we_w5Gy7N0v4h7b6L47mkyZPApI4ibMM01BYqOvykJQnEPolXTbnHECIZs8qJ_6im7ivr_Z_iHWmbY-jVZ6EI7SeEqvSyYJ9tC_2xkhmRU6whSvsqNl25dvRyJEFDA5lwEhpKwHgvi5PP0h8M2zWM-kZKMBdUTaXuV-ARSfAdQwT_IHqe8MoqxZI-4xZ1j_F1y7052JQnjut7pBMbQS0WdEriYpP1aWjys--WbC1lekaY7Y0MV6kPW9WqOk=w592-h789-no",
        password: "password",
        bio:
          "Kat's Bio.",
      }
      
    }
  }
  render() {
    return (
      <div className="page">
      <div className="body">
      <h1>{this.state.member.name}</h1>
      <div className="body-top">
      <div
              className="picture"
              style={{
                backgroundImage: `url(${this.state.member.pic})`
              }}
            />
      <div className="right-column">
      <div className="bio">
      <h2>Bio</h2>
      <div className="bio-content">
      {this.state.member.bio}
      </div>
      </div>
      <div className="characters-block">
      <h2>Characters</h2>
      <div className="characters-list">
      </div>
      </div>
      <div className="campaigns">
      <h2>Campaigns</h2>
      <div className="campaigns-list">
      </div>
      </div>
      </div>
      </div>

      </div>
      </div>
    )
  }
}
