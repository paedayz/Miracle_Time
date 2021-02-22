import {LOADING_DATA, LOADING_COMPLETE, CLEAR_SESSION, SET_ERROR, CLEAR_ERROR} from "../type"

const initialState = {
    loading: false,
    error: null
}

export default function (state = initialState, action){
    switch (action.type) {
        case LOADING_DATA :
            return {
                ...state,
                loading: true
            }
        case LOADING_COMPLETE :
            return {
                ...state,
                loading: false
            }

        case SET_ERROR :
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERROR :
            return {
                ...state,
                error: null
            }
        
        case CLEAR_SESSION :
            return initialState

        default :
            return state
    }
}