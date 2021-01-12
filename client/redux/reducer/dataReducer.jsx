import {SET_DATA} from "../type"

const initialState = {
    user: {},
    data: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_DATA :
            return {
                ...state,
                data: action.payload
            }
        default :
            return state
    }
}