import {SET_FRIEND_LIST, SET_FRIEND_REQUEST, ACCEPT_FRIEND, DENIED_FRIEND, SET_SUCCESS, CLEAR_SUCCESS, SET_FRIEND_ERROR, CLEAR_FRIEND_ERROR,LOADING_FRIEND_DATA, LOADING_FRIEND_COMPLETE} from "../type"

const initialState = {
    list: [],
    request: [],
    error: null,
    success: null,
    loading: false,
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
        case DENIED_FRIEND :
          newRequest = []
          state.request.map((request) => {
            if(request.username !== action.payload){
              newRequest.push(request)
            }
          })
          return {
            ...state,
            request: newRequest
          }

          case SET_SUCCESS :
            return {
                ...state,
                success: action.payload
            }

          case CLEAR_SUCCESS :
            return {
                ...state,
                success: null
            }

          case SET_FRIEND_ERROR :
            return {
                ...state,
                error: action.payload
            }
        
          case CLEAR_FRIEND_ERROR :
            return {
                ...state,
                error: null
            }

          case LOADING_FRIEND_DATA :
            return {
                ...state,
                loading: true
              }
          case LOADING_FRIEND_COMPLETE :
            return {
                ...state,
                loading: false
              }

        default :
            return state
    }
}