import {LOADING_DATA, LOADING_COMPLETE, CLEAR_SESSION} from "../type"

const initialState = {
    loading: false,
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
        
        case CLEAR_SESSION :
            return initialState

        default :
            return state
    }
}