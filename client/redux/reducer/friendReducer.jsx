import {SET_FRIEND_LIST, SET_FRIEND_REQUEST, ACCEPT_FRIEND} from "../type"

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
        case ACCEPT_FRIEND :
          let username = action.payload.username
          let newList = state.list
          let newRequest = []
          state.request.map((request) => {
            if(request.username !== username){
              newRequest.push(request)
            } else {
              newList.push(action.payload)
            }
          })
          return {
            ...state,
            list: newList,
            request: newRequest
          }
        default :
            return state
    }
}