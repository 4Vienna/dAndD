import React, { Component } from "react";

import CharacterIcon from "../icons/character-icon";

class CharactersList extends Component {
  constructor() {
    super();

    this.state = {
      characters: [
        {
          id: 0,
          name: "Vin",
          pic: "https://lh3.googleusercontent.com/TFgcKqYrDQMF9e-PlETZ4PaDim1UvczTAZ1Vovrjen3WUhUA4hdhH7Is-wSvLxnnvhhN0zomc3mogBgL9xFnZYd5k7TNd1pbCxZAPNEAfeuuf-LRLnST9SF9FNQqemg4N3AvJUsdV1XWBw4D951LfIwZ8uxJ9nZ7AHYpfMpu0900BSv0hKPLlpXZNSgIhKuKtwInJdnUp-gU4ujDt1qy8IKaEpEB4EtWYETDcX7yr4WOdWY463zmmhf7LS6S3vFcaes5gQntMmuVybbe5NBh9gSpNH5qe4aRArYbL6UpeZ-m-YgZXXSkOy2GvJHQ2sEoMiRjOIo926VQlkDdm1KQrFT_N9efI4g-9lmwncJQma_CFJftiD2QxoLUucLMFAj54y8x4VoSW3zqlVOXyyva_Zc9V4A-yfLfJJ5ZLU9jyHMNVmgTV9a4i9_JWGTM4qEJsD-jeaiRcwsn18u8odE2XTu11xS172hT_nAHDekRkfulF_E3QBPygL_tzOP3raP-j_Ox_D-C1sbGcio98BuwcFyx8cV_opxp_vTHmZ2W4trdp8dJhZd_5Srjho752MiOsD20Mgnsnb7-kU1wMoLY_kg6Iz8oDrOR_L4Ylm_lHrSn0tE6XDw0YxHnhKwFIdd-JRWM85GLh5Xqu103YVglM93yhSwep3pGxwNvu01PoZTY6upWH1oB1p4L8fu-eqlhvM2EJvLyztvxuZDU1uU0g3eu=w569-h744-no",
          race: "Wood Elf",
          className: "Rouge/Scout",
          align: "Neutral Good",
          bio:
            "She is a quiet loner. Banished from her villiage in the forests she was forced into the world of men, she quckly learned that money was the only way to survive in thsi world and started to use her skills in order to get as much wealth as possible. Vin's only connection to her old life is a sister that she routinely sends letters and money to, the letters are never answered but the money doesn't get sent back.",
          campaign: "Tomb of Annihilation",
          player: "Kat"
        },
        {
          id: 1,
          name: "Jared",
          pic: "https://lh3.googleusercontent.com/AwtPA9frHwYPDnBGHTpoHQ-MZAIjckYuMzjVtzZH8damW2e_O-JZ-eaRHwPVS9P_jzbswj0-qSw2EmV4LYTKNXb9jCDwPqIv-9VRFLE1g-_q5yaYGUaBG1hHRMwDKXRybla_x0r00y4qnY_2-VhbgnzYLxwoFEAn9pNxMPdYhBpf8dv44RGzxLRzFTx-fv9S_TPrmTzUVliSdKGfs5v0cppkLbcAeKQoZpyl_quinPAkHwuquutANZ3LJNgbbWf8K1DJBybIbvehEMitLo_47Q3t6denWtit6IIRmKv_9khEXpEt6mKdyYYiGNG3ZjQ6__2pM4Rv-GN449uwH5SauVphp70WzlE-sOy4H4ZHGmyansXKRmkbYJ-dKWaQL6zoUYZM8rX9qLvidUFTz1LWBgRMO2Uh5y2PZCx14WUZ8EboDuDmljLAox57Oj-mIs037ZWuQDzZimRny-RM2dSJSpLwYQzu1PHfQm-zZKVlJW0kGq7ClCQgfOZl366X3O8wwHQ5Qc6P4TcXaVAyHEtLjTyHBMCvySb1VgUuQCOYylY688YoHXvwVdJ_oSh9F-Y6puOtq82Ysd6agrZxYQylshXCfHFgHNkopx8Sz2dW2t6qu5Aix_Jw3UPMLQuOaLYI-4fyq3XM9Dd2fAg3KzFCY05zmgX_3Mk=w487-h756-no",
          race: "Asimir",
          className: "Forge Cleric",
          align: "Lawful Good",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Eli"
        },
        {
          id: 2,
          name: "Thurkear",
          pic: "https://lh3.googleusercontent.com/QmYpoVlzn7GS5LKY3-j9KzmGs760714dQvHxep2KA8MZsmcMo32YfyXTO21T98VwFk4xH6JeLhpLSmaenGWn1wU5KD-ba9HWwIy2clzim0g6-u3ts0_w6JvTK5U4beiFq32-QeCBH1aTxNKiWpulWnLz6hIIvdWEK8TXV24dcT2bgsU0CN-t3VtqroW2ylMrs3l1ewMDX7NSzXuKBI8s3HVnPqIgU0sM4yYAr1uWKvzCpi6WCOp0KA-DMq9t62UXn8cb0XKKNhGOferjR9IWU0GFZWX_HDpBnex1QGD_-oWTDW7XvCjqB_C-JcVXzFAiVNCveX1wZewfvSrhACBCYYz_wMmnMfYKNHGoIp0yQq-9RUvbzFbZw2a8p-kqi7VRlWRGKLitKP0RQ0fxHDzOS4e2Xhj3yNIv0Zx7GOIUkEQq8x98GD543gcHiFQkPr2j7iWaW-6dzVvxY0gWf2-koA-IXlruqrbDzvkZFYSjMcY4ViN1_TqMw-EhFD35Jd43OX1hj22ZPdLfVpsLqxrbxMI_framUgbDH6X_cUivM0hhbz-VF4Uh7oeKS9I2kw9ySWf-8kWPIq68AH0s65I6HgjvvxHtTrUX5Nv6LQOXuk-lsIWjdOQwItNMf-TZjGOI3cnzcIbnvYJWO6xYLGlKH6ejIU1CLUY=w513-h780-no",
          race: "Dragonborn",
          className: "Death Cleric",
          align: "Lawful Evil",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Jacon"
        },
        {
          id: 3,
          name: "Damian",
          pic: "https://lh3.googleusercontent.com/4XWWWlXJjWHyDZ2tjAY9-ruEahNLpZ2WpzUW-ILhehaxrMqihNmsVAqQ-km1HjdkzyuIdenQ2yqxGTiAXSzw6SL6Fmnvxzfz6udmtQhjNKO7H14dfEzyZ3avbiNbtULPcPdgGDgTMu2BU3x6c6GM0Yulq8abkhC-16rynu-u353Fx646DTnbwWLr9c-bm1vDEZZRuRm7fmIdaPvdl6yi1QcsUlWDs8UyMjKqr0j4WoFZrQg6OwmYMZ2gBzORwaRVps86LOBJacP4XZjjNFynj6JjsDcJjh2m1Ohc2XbN_RMpvr6Rm6SxqN9_0gRo8ab9q7YO82Aywp4Ix50a63DCdABCfehQ-r3jLbQS_sbQqn_7K4MrFAOUEqcCaKH7K6mTlspLnw1EjEs6v17K0DqJXDo7fqXvhU42wg8RTYBuu5kBoZhugJD2Ui9bJ211z-eA_1c5ekIW0whGVIOR4ouFe59qnj5kog1L7wulTR5mZ_IHcyobdZz2mGLHWFsHSuw9APq5oFkTyrMbM45qEE3l779kH5mJK-pjwBg2xPv7Wteahix-jEbJK3FXTua8g3qugnT7hncS4ld9TQNlb20umyRr56CzMsRamLyOkMqh-QJjPh-bFOvhj0pJpAv4HnSD-K_fhV87cVnd7ks1ICWWW0Fo0MQoZEc=w422-h789-no",
          race: "Teifling",
          className: "Sorcerer",
          align: "Chaotic Neutral",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Hyrum"
        },
        {
          id: 4,
          name: "Mellon",
          pic: "https://lh3.googleusercontent.com/DayL-zN5gMhrSBPcf7K0F5yvjShPPqb91OB4CEf4JQa0OH8zTWWon43pLr3JlcP1l1-b6NKP41LsI_c2d2Xp33vG0Awl5DifuBv8xl--5FUn1W5z3MX8YkxFkReTVIY30RD69R0ZDpX4j3X_FX7jqFVzdkmnMOs4cjtmBQeCHNuI-87T87rIXmZVRnKVTy7_NI9_jnIi-FB1xNQQU6jFLScBPSRJGBa6TnPiwO63gd_mKDL2lc8CzPgB4LuyeEovz89QQDq89lJtrW6jE3aL7KB4_ekITNCQ6yFrgcJI4fkgvckAltgc8xwevkxIYWbgXpHB1w5FaTMnI32CygV5UjxNwOERrmqhqcoBTjvF1i8DUcJc23_TxNq2ks6PnmAK5gMiCj86bylXGOw859LTzpqdrquR_8_Jfw0UzJ9emj6YHtt1mtbJ04XsPa7k3uRkoydPpt_2ABGJdU02ErHwWGeeM-xngDg-wrGUHgpmpcB_Bb4kHtA-9NY6lugHnJ7_77-RgniWjOZYes9TY3mowdVAS2JqAibMxqGnyB94NM9IToVjWrcNu1_aZpf0pIQSdepO3Avs4fLEyf1ZQ8S4WmOnWUvgoq04rG1gtzjKhSsqFW2NYeHIcUeEYe3XW6ZmzabckHSUF47c5fBY2DxVIF3AtA1cSbU=w504-h700-no",
          race: "Furbolg",
          className: "Swamp Druid",
          align: "Neutral Neutral",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Hyrum"
        },
        {
          id: 5,
          name: "Grungy",
          pic: "https://lh3.googleusercontent.com/Cu9YRlutmN_4A0-k-R0lO0bolRHobGpMb_zQR-ZD89y7b6nglW9q-7DUBapV2BP6EGKt2Qa8XTMqhgeg51BFoPoMfeUOt3OlFfuXxaUyx_swOaRXzhUDlLmvQY6ZjkxogiEWEph3A-a0DvyrDaE98kPFZjabE1z56JIyMaOIr_v_v4BBWH3mdnST7u4xJvIo5SUXnmuEQY8nuph7kRzEdVscGrEALq6Sru_E1teZ8mTmMUFFyMoGeICp1OplqLpJb7jwxqplHWiR5w0diwi6sUieE88A1J7KXIP-qOHhTx_iTNhvqGZM70TVvlGw_mblu545idHGy05gQk66OikzzJBrUREwUFuJALUEf0MLV_aLYugkYD3mvOKD5rHH3x-r6kWFWqtcpeIBjcuO2XAoesGJI-mMlFlTd73_W6trwsD5N66TLEbYaAIaBOjKjnbUH_WNmQdbzlp6Q25h50gO4xRV1xBNXb-H5hDwytShdDxLeM6oUE8g4tULqWTGDhTInD0dtr7rnM7eAPdbYK7VBnLeyDJIrGEz3sVjF6HOUhQgFghXXc3WO6DCu0g9ozftlDY5BXZHBXHdPB1X2YadEDvQ08gz4CxZyNG1b24WmRD-zj758peRlsdi_1g2khz8LBRXfab06uEdSgtd9rplVOKXg0jDgv0=w687-h677-no",
          race: "Mountain Dwarf",
          className: "Fighter",
          align: "Chaotic Good",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Chris"
        },
        {
          id: 6,
          name: "Ella",
          pic: "https://lh3.googleusercontent.com/Rg4mh2b5nHyNw_1lnk8ceSXSVPIxjQwCOWhGTdlBKN9n6qWH7prqqqMcP6BEEY051nOzO93fLmJobeoCvyKOEhBM5WunqXXHwvN0SAP_OCvdWpy15PQqftSRtLJYCTPfXhNmTS6Ozeka7YcBpmqfPFO6fGl_8WbW4nhfp8_thSN3rj1O4t4gu8BhNNPJl5N2Iffzt2KPSmZ9vvTF-qwfM1O9Aucl4TssUdk1QP0xTTaG_tSzJxw0vZuTPcsHP4rrz5S8d43FKOhN4Df2J2l-SZBlSxfiHKg1Zj1G2EHAT7MU6M1Eg8ygJHmlBFFgGIEKQ9SUqDA8L2JvQLosIXJYxdO6dKVOUgy45ukkHxMqlrKz7jcg0mHCYaRk4mt-xaMflMEP6_ibzc8ahWV3EeBFjv6TLwF47mVVykcVFbN4OxT4bnxRnzKrJ1rAlalgWZMZJAgQiq3PZ8lpaqxWyNsiu9av1XMwMd5FYJ-qxwGa18S418x54l9FmjjIUR-858HYkQHvhrkcYStyJH8weasEG953n8mVtkhHijrVBev8Pmjdh8iz5NucyB24Md9IClFHNld_oBb2KKTVURvhaS6DU9FBWTLnMyZMOlteXmrryqFux4w2ithvIkVQMgF-UaX_k7zGH9lmU0jggKLKrx4vkyPXltdt5kOR00xPLvVKJzbRQEGqQ2pA2tX8RfT3eU0d1HQtwbuMGSW_8qatX8EvrRed=s225-no",
          race: "Gnome",
          className: "Warlock",
          align: "Chaotic Neutral",
          bio: "Things about her",
          campaign: "Vampires",
          player: "Kat"
        },
        {
          id: 7,
          name: "Kitchriss",
          pic: "https://lh3.googleusercontent.com/wPSCS_L3A44rLW5R0qc3E3aY6sXf-KkL-GBi8fPdAkoZVQORoAmTX7ks6SMaFRsVoFhkTUQfLKavwUdXEIoDcgL6Wg-j9ayIDnvwB5Rz8wo36v2QHt6ibFdeYF1KBubP904xEq5aj4rYHzqt4wr9iJU-jcQ_XmsTlyJzSm93FhvSx0wufPOdBflvfcJY7J1_xZHHur7MtSHcBmE7O4ost1e3-ohxh4iPwOkzs1g-n-j4ymC756m7IQF_X6VaALvcQ8V9dvmJw4zPWpn7W_peLZY3_7mHlj9sWslvq-pl9I5S84NL_zr8_kb7N342qc-eWzuTg2nbtMqYYD7q1kH2-7OmSae0087voaDQBL4eUoMAqpznUawc-UXRYPhGMx6D93OBF4pZkey7ztSte4DjTsIg-nuczRuWWEB1DXlUNkNkJR4GyEelECBXzrxdm-iJrh2OU2LRiqvpJZxRClEtCn0HB2OQpYVSmMfh9aeVMgWUMC77JVixNnBVlDgygZQ-Sk0NxFN4aikubxn8wAza6gUj5EHCevQR47aiZzZkgcSWZz_qUucdLTB7XeX6_jyIoWvKD3fsBCQJRrLXEp9Sk-wW6ut0YMVcvu_Xcayjj7nDAgsyH9Bte_tp7oKwfK-a-vTVTaUmVoeX46sjUFwmgjOxPNw_1GY=w488-h639-no",
          race: "Human",
          class: "Fighter/Arcain Archer",
          align: "Neutral Evil",
          bio: "Things about him",
          campaign: "Tomb of Annihilation",
          player: "Hyrum"
        },
        {
          id: 8,
          name: "Jacob",
          pic: "https://lh3.googleusercontent.com/Rg4mh2b5nHyNw_1lnk8ceSXSVPIxjQwCOWhGTdlBKN9n6qWH7prqqqMcP6BEEY051nOzO93fLmJobeoCvyKOEhBM5WunqXXHwvN0SAP_OCvdWpy15PQqftSRtLJYCTPfXhNmTS6Ozeka7YcBpmqfPFO6fGl_8WbW4nhfp8_thSN3rj1O4t4gu8BhNNPJl5N2Iffzt2KPSmZ9vvTF-qwfM1O9Aucl4TssUdk1QP0xTTaG_tSzJxw0vZuTPcsHP4rrz5S8d43FKOhN4Df2J2l-SZBlSxfiHKg1Zj1G2EHAT7MU6M1Eg8ygJHmlBFFgGIEKQ9SUqDA8L2JvQLosIXJYxdO6dKVOUgy45ukkHxMqlrKz7jcg0mHCYaRk4mt-xaMflMEP6_ibzc8ahWV3EeBFjv6TLwF47mVVykcVFbN4OxT4bnxRnzKrJ1rAlalgWZMZJAgQiq3PZ8lpaqxWyNsiu9av1XMwMd5FYJ-qxwGa18S418x54l9FmjjIUR-858HYkQHvhrkcYStyJH8weasEG953n8mVtkhHijrVBev8Pmjdh8iz5NucyB24Md9IClFHNld_oBb2KKTVURvhaS6DU9FBWTLnMyZMOlteXmrryqFux4w2ithvIkVQMgF-UaX_k7zGH9lmU0jggKLKrx4vkyPXltdt5kOR00xPLvVKJzbRQEGqQ2pA2tX8RfT3eU0d1HQtwbuMGSW_8qatX8EvrRed=s225-no",
          race: "Human",
          className: "Bard collage of Swords",
          align: "Chaotic Neutral",
          bio: "Things about him",
          campaign: "Vampires",
          player: "Jacon"
        },
        {
          id: 9,
          name: "Sebastian",
          pic: "https://lh3.googleusercontent.com/Rg4mh2b5nHyNw_1lnk8ceSXSVPIxjQwCOWhGTdlBKN9n6qWH7prqqqMcP6BEEY051nOzO93fLmJobeoCvyKOEhBM5WunqXXHwvN0SAP_OCvdWpy15PQqftSRtLJYCTPfXhNmTS6Ozeka7YcBpmqfPFO6fGl_8WbW4nhfp8_thSN3rj1O4t4gu8BhNNPJl5N2Iffzt2KPSmZ9vvTF-qwfM1O9Aucl4TssUdk1QP0xTTaG_tSzJxw0vZuTPcsHP4rrz5S8d43FKOhN4Df2J2l-SZBlSxfiHKg1Zj1G2EHAT7MU6M1Eg8ygJHmlBFFgGIEKQ9SUqDA8L2JvQLosIXJYxdO6dKVOUgy45ukkHxMqlrKz7jcg0mHCYaRk4mt-xaMflMEP6_ibzc8ahWV3EeBFjv6TLwF47mVVykcVFbN4OxT4bnxRnzKrJ1rAlalgWZMZJAgQiq3PZ8lpaqxWyNsiu9av1XMwMd5FYJ-qxwGa18S418x54l9FmjjIUR-858HYkQHvhrkcYStyJH8weasEG953n8mVtkhHijrVBev8Pmjdh8iz5NucyB24Md9IClFHNld_oBb2KKTVURvhaS6DU9FBWTLnMyZMOlteXmrryqFux4w2ithvIkVQMgF-UaX_k7zGH9lmU0jggKLKrx4vkyPXltdt5kOR00xPLvVKJzbRQEGqQ2pA2tX8RfT3eU0d1HQtwbuMGSW_8qatX8EvrRed=s225-no",
          race: "Human",
          className: "Fighter/Cavalier",
          align: "Lawful Neutral",
          bio: "Things about him",
          campaign: "Vampires",
          player: "Hyrum"
        }
      ]
    };
  }

  render() {
    const characterRecords = this.state.characters.map(character =>{
      return <CharacterIcon key={character.id} character={character} />
    })
    return <div className="list">
    {characterRecords}
    </div>;
  }
}
export default CharactersList;
