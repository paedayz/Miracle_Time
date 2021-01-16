import {SET_USER_DATA} from '../type'

const initialState = {
    userData : null
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                userData: action.payload
            }
        default :
            return state
    }
}