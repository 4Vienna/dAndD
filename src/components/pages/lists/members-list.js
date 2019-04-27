import React, { Component } from 'react';
import noPic from "../../../../static/assets/images/no-char.jpg"
import MembersIcon from "../icons/members-icon"

class MembersList extends Component {
    constructor(props){
        super(props);

        this.state={
            members: [
                {
                  id: 10,
                  name: "Kat",
                  pic: "https://lh3.googleusercontent.com/MqB42Wh3IIIrAdjvfohwpyRvwBvA8xH5fQuIOm5eJEyPgU5Q2QSH3ei4UF_Tx0yyMPlFMeTXGKvFIX7k1KFagqFw9PWmWztk-htJGZtzPhYkWPWAkYuKq6W2HO5SeVGN4tyfMDmeRIYBs-Q4QVZWTzPUxVt8QOB3DmwVT-ESXEDHxqBB2XQ0-CYnWvHMKlefr-92NzBhI-kQSfWgF1oe5QWI5tSYfooE0eMggZQ2Mmh8fmIjjiRFsGYT-_ey8ZPzvZubE4ErCAiposun3-SxTQkpqSVEH2B_0NjsANmqGRf7wCNv_9Prd_vT2JotrwZCc8VJGXnv2lO5DNX02WHxn-vKT_pRBMTtwhEAix0gf3WeMgMgg-03ZzOeYZDPsWAmtJFHLll-yP-Wv1PYgP7n_QE9ZHk6-OkwUS-4we_w5Gy7N0v4h7b6L47mkyZPApI4ibMM01BYqOvykJQnEPolXTbnHECIZs8qJ_6im7ivr_Z_iHWmbY-jVZ6EI7SeEqvSyYJ9tC_2xkhmRU6whSvsqNl25dvRyJEFDA5lwEhpKwHgvi5PP0h8M2zWM-kZKMBdUTaXuV-ARSfAdQwT_IHqe8MoqxZI-4xZ1j_F1y7052JQnjut7pBMbQS0WdEriYpP1aWjys--WbC1lekaY7Y0MV6kPW9WqOk=w592-h789-no",
                  password: "password",
                  bio:
                    "Kat's Bio.",
                },
                {
                    id: 20,
                    name: "Hyrum",
                    pic: "https://lh3.googleusercontent.com/u3XzuSpeqG-90F1MUvCDGkLtSxErsgLnsh_GTjV2mYiL1AsrRi1iT6FS1N3HmCRiBIGhSmbSO5dngR6ffhtV1oNfyJJjjdyi0dLWT4B1IVlI1F8QWAfpTrSb7ojip7lnYTGLmJQ_vUGuyD4TJkPLCMOrI7_CtQIwonwVsE6g15TDEMZOka3vEeAdOYbqBfDdW7sl8UcQVA0VxJ-UGXskjTKpFtdlUAXonv4reyG3UIYCHN3-LUQtD-jUhk9cLPEAC-W3LzTBW-LiQx8v5I9QMEPTO-MVe7ojebuPOnK8Z6CgaC690S_gqF6gl_0qzpP9Cp6Ez-geEX4BvMP7elic3r3FRjJb0ogniAXUzxasCCUnOprHefaOO6OpPiq5TqpF_CyKKB5I7RrOglytYCA9FLK7U2g-jgGKCBF2-CfxChySiowxoo7gJV6IrG1ZTgFJVsMO8cixNc0nfI1rzp5jDRU91069Z_DNz3hQ3fbHbbWvSwJPg2mLV0zIZz_TFSsVAp_es2H5t3Go3h5AqmmErd3qMae5ygk-fQ66yMcd3OPMTYJrlkOomYa3xb_h6vFAs563hmcjy7oG69NgvqYsu2yq3tngejGaONE4q0lnc1Rfly9ISEcWFWBZPbAkGm89V8yEqkWBN2MGsBp8VxQwhlezndGfm37d_fiewMVHZocMIqravHZZiIZh8s0BroATnvSNSFmziaLk2rz10j72f9OP=w456-h294-no",
                    password: "password",
                    bio:
                      "Hyrum's Bio.",
                  },
                  {
                    id: 30,
                    name: "Jason",
                    pic: "https://lh3.googleusercontent.com/Rg4mh2b5nHyNw_1lnk8ceSXSVPIxjQwCOWhGTdlBKN9n6qWH7prqqqMcP6BEEY051nOzO93fLmJobeoCvyKOEhBM5WunqXXHwvN0SAP_OCvdWpy15PQqftSRtLJYCTPfXhNmTS6Ozeka7YcBpmqfPFO6fGl_8WbW4nhfp8_thSN3rj1O4t4gu8BhNNPJl5N2Iffzt2KPSmZ9vvTF-qwfM1O9Aucl4TssUdk1QP0xTTaG_tSzJxw0vZuTPcsHP4rrz5S8d43FKOhN4Df2J2l-SZBlSxfiHKg1Zj1G2EHAT7MU6M1Eg8ygJHmlBFFgGIEKQ9SUqDA8L2JvQLosIXJYxdO6dKVOUgy45ukkHxMqlrKz7jcg0mHCYaRk4mt-xaMflMEP6_ibzc8ahWV3EeBFjv6TLwF47mVVykcVFbN4OxT4bnxRnzKrJ1rAlalgWZMZJAgQiq3PZ8lpaqxWyNsiu9av1XMwMd5FYJ-qxwGa18S418x54l9FmjjIUR-858HYkQHvhrkcYStyJH8weasEG953n8mVtkhHijrVBev8Pmjdh8iz5NucyB24Md9IClFHNld_oBb2KKTVURvhaS6DU9FBWTLnMyZMOlteXmrryqFux4w2ithvIkVQMgF-UaX_k7zGH9lmU0jggKLKrx4vkyPXltdt5kOR00xPLvVKJzbRQEGqQ2pA2tX8RfT3eU0d1HQtwbuMGSW_8qatX8EvrRed=s225-no",
                    password: "password",
                    bio:
                      "Jason's Bio.",
                  },
                  {
                    id: 40,
                    name: "Jon",
                    pic: "https://lh3.googleusercontent.com/7drvzoAbGgcJMfRs-ZYpNKygcw1Zf9rUo7CLE9m6q1P5yQDdgi1tYjP1E4XWZ54hgxyfsHYQQTvLXHprz9GuCXwuqLnEtHeIDhZnp8PELgSCLDpmumkFMEwY8ram4-LAx1lypDTv_EGoo2xG5n9dUXGyliD29Nt7KWvxXJdWhRPaCxFdP64197waQgTytrg3y6EmalUtHXfGixJAhjxDnNNNC7E-KmE0RWruhvBx5UXa4quMb8-w6IqFHHKSVbArZEZvwIColY5Z_ZZtArzVu-mKeVnX-10-IsHKAOKfFkR-ndSqlQkZLLECyJPFDAXOyofUEEBUvdo94SotK2eKEpC0_DzKIbYD6C7LNefHF7eXvvWbAQhhNx0-iCL-yO38Cg6K6DT05ti9Dn4mjfgVkX06fWr3BHFBkFD4xJfTiesrp8t_MQWZ_4EhEuPUBt6FvmeT0TbEfJyi__mEhfR64cMRO5HP22-joF_UfKZfjVMimrxYUmo6JShRpkC12EWUqPYzqEsk_a4YOsK_IVYIksnMV4DXD3-gf8QMpkac_d_NnthY4pA_zMs8NgOBPso8c2GMJ5FAEV7SRSvL6oakiZJYKfFZh-uQ9jbks9IL8-1CK5FKoGSBVapmYX9DupPSgU-rlZ4KPnK5CwJEOkXBwciWzCpXNLPX0jnPs5efszMFAb2X3emFbqEZ7uXtwK54w1hNI6fOim4tyMGXA9hJex6u=w684-h740-no",
                    password: "password",
                    bio:
                      "Jon's Bio.",
                  },
                  {
                    id: 50,
                    name: "Eli",
                    pic: "https://lh3.googleusercontent.com/zwl50qiwNq6o__lyfUaXixeEEkeu5h-U429ZSBzzKH09ltuiTh4Il3LqKKNPrBtJPQg_vITDAKiAXr79uJDCfy2ZhA01NJeqk8A-7TakNkBm57WnrS3dYkSp6C_xCmQs7KsgnGqW1GMfy5UUPbvQKpwPWctGDFrwk6RYHf28kndcpY36M3ZOAWCi4OXjtapDS-PYQR6AZhfuGbQpo5SPJxKwCVGVJl5sSYWUcGjF1g3VIJR8-IFe44WLy9WdaKLK7HJ1F1TXWfdcsqKkkYXhDaP5xnyYK1fX2nWzyg6c9n8WaMjk_6xv3PGl1Ke-dBEdpHdLrsDpcc3PtVZbXMbpa9imBoCa0_jEMtrwD-jPusYgvo_I7c8eNvHZQs6D8K4-iZ8M24nTze5E8gFk9N_p1vpXx9OQHoXPUqZBpHp7VuwmbIXSgyYHCJ8zpAAJlGshZqNHNVDkDhr-9qWRAxaK2HI4QuA3IZ1rbFj8dJJPgXn6d-f7V1i4ViXinS_RpfVuHqVqI8soMHo2-vY2Z2fsiNcU0E8hcRXwyhIPvQYBbVqnEto2RomKu2SSBghgPrVHsf33-YuMJjLDKp2A0G58iznvk7uAO_EjSfTrQW2yZYVFtvRvlHzprBvwanwGcj_gvgnY3wBFkK5fllMse7VxF1jXzqYq02KylMl8ntK4_e60jDhaQLfTGlyEalpjKzZplEYQn1Qx-2mR3XOj-LaG192x=w1231-h740-no",
                    password: "password",
                    bio:
                      "Eli's Bio.",
                  },
                  {
                    id: 60,
                    name: "Chris",
                    pic: "https://lh3.googleusercontent.com/Gbd07CbBGzIcN_sq-H0XW67raeyXo3VUITuTGpYJ959r5waWzmhty6FiB0QKh-fjSdfmgY5Y9-Uap6OL8IJAVNVK4qxBKlEK3lehWmH72klb7PF1X6y9z5BEJPP_ylfa5gfVcxgZiRlMGI_wdKyIqp5Exbcb1MreUMULP0MIdY5XTRlc7uXLAYaKd7akNfzIOUfzRwNw51qBVt_Fmvl5LaHKYgXt_lNBj4JVYOTKMYS2bR6z0vPfgQo0pQ5iNQnbe8yHVWSwuDyukbAnWf1t9JWpGDc6X3yK7t6XD39wbWCP8MxTXb9Pt9YprxMvm2FAN0N47aVx7yAbuTZYfW2pnbonRcQUswnInZWQ1Sp_TtEd0M8buL-mmDruQwBkwPXc5LLRk0YCTIkFKNDDZhz_pbS7hrx_6G4NP9gbKmTC9rWlewQX_NmuvPxrXewy-EI-AFYTdKZf2hjp059_Q4EWHy1CWz6Qsu84qGldCL7h0RvlN5Oo2iwam4gn0y4q1w1LXX8lX5ZtC17Vry6vI-A685agxR5hlMwfrJ3TGdKQEi56ypO1-CDkMVdN2asUjhu0dYC6n3iyF9GibDFsNo7Y-2hDoqdOoUXvmzLHFzWnSIPfq1z3T-i2VtxFQ-NG8Mt19_MSNhNalAcRUPV3UJy_guyIAqY-RaJBGHqent0SR1bdJz68xdYHWnrx_XivmgM3bNwG8GSduDrrhm8nOTmqJT_u=w1107-h740-no",
                    password: "password",
                    bio:
                      "Chris's Bio.",
                  },

            ]
        }
    }
    render() {
        const memberRecords = this.state.members.map(member =>{
            return <MembersIcon key={member.id} member={member} />
        })
        return (
            <div className="list">
                {memberRecords}
            </div>
        );
    }
}

export default MembersList;
