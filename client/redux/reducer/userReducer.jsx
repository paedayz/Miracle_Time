import {SET_USER_DATA, CLEAR_SESSION, SET_USER_SETTING} from '../type'

const initialState = {
    userData : null,
    setting: []
}

const startState = {
    userData : null,
    setting: []
}


export default function (state = initialState, action){
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                userData: action.payload
            }
        
        case SET_USER_SETTING :
            return {
                ...state,
                setting: action.payload
            }

        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}