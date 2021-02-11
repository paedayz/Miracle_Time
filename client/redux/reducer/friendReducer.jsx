import {SET_FRIEND_LIST, SET_FRIEND_REQUEST} from "../type"

const initialState = {
    list: [],
    request: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_FRIEND_LIST :
          return {
            ...state,
            list: action.payload
          }
        case SET_FRIEND_REQUEST :
          return {
            ...state,
            request: action.payload
          }
        default :
            return state
    }
}