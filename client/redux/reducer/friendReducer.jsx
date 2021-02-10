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
            "bio": "I love eating",
            "coin": 0,
            "createdAt": "1/19/2021, 7:03:17 AM",
            "email": "pae@email.com",
            "errors": {
              "nickname": "Nickname is missing",
            },
            "exp": 0,
            "level": 0,
            "nickname": "WowZa888",
            "phone": "0882804276",
            "status": "user",
            "theme": null,
            "userId": "B6vFDPyylAYn3oN5z0euLNfREcm2",
            "userImage": "https://firebasestorage.googleapis.com/v0/b/dtime-44c09.appspot.com/o/132f123b-7989-4e5c-83dc-6b2d92950c6d.jpg?alt=media",
            "username": "Pdayz",
            "website": "www.facebook.com/pae.signal",
          }
    ]
}

export default function (state = initialState, action){
    switch (action.type) {
        default :
            return state
    }
}