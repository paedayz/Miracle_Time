import {LOADING_DATA, LOADING_COMPLETE, CLEAR_SESSION} from "../type"

const initialState = {
    list: [
        {
            "bio": "I love ninja",
            "coin": 10,
            "createdAt": "1/19/2021, 7:03:17 AM",
            "email": "ืnaruto@email.com",
            "errors": {},
            "exp": 0,
            "level": 5,
            "nickname": "NarutoZaa",
            "phone": "0842561487",
            "status": "user",
            "theme": null,
            "userId": "9874632165749",
            "userImage": "https://pht.qoo-static.com/cBUu8Zk0_2sn30xk-JcoNNUKhuIbGEKJCqrhMwrdguvaHHTdvGwtruM9xyTwS8Jmow=w300-rw",
            "username": "Naruto",
            "website": "www.facebook.com/naruto",
          },
          {
            "bio": "I hate reborn !!",
            "coin": 20,
            "createdAt": "1/19/2021, 7:03:17 AM",
            "email": "tsuna@email.com",
            "errors": {
              "nickname": "Nickname is missing",
            },
            "exp": 0,
            "level": 1,
            "nickname": "Tsuna",
            "phone": "0145698526",
            "status": "user",
            "theme": null,
            "userId": "B6vFDPyylsdfAYn3oN5z0euLNfREc5m2",
            "userImage": "https://upload.wikimedia.org/wikipedia/th/a/a5/%E0%B8%AA%E0%B8%B6%E0%B8%99%E0%B8%B0.jpg",
            "username": "tsunaYoshi",
          }
    ],
    request: [
        {
            "bio": "BLACK CLOVER!!",
            "coin": 0,
            "createdAt": "1/19/2021, 7:03:17 AM",
            "email": "pae@email.com",
            "errors": {
              "nickname": "Nickname is missing",
            },
            "exp": 0,
            "level": 0,
            "nickname": "Astaz",
            "phone": "0214569856",
            "status": "user",
            "theme": null,
            "userId": "B6vFDPsdfwerxcyylAYn3oN5z0euLNfREcm2",
            "userImage": "https://strawhatmanga.com/wp-content/uploads/2020/02/Black-Clover-241.jpeg",
            "username": "Asta",
            "website": "www.facebook.com/asta",
          }
    ]
}

export default function (state = initialState, action){
    switch (action.type) {
        default :
            return state
    }
}