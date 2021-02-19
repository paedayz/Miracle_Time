import {LOADING_DATA, LOADING_COMPLETE, CLEAR_SESSION, SET_ADMIN_QUEST} from "../type"

const initialState = {
    questList: [],
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_ADMIN_QUEST: 
            return {
                ...state,
                questList: action.payload
            }
        
        case CLEAR_SESSION :
            return initialState

        default :
            return state
    }
}