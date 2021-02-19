import {LOADING_DATA, LOADING_COMPLETE, CLEAR_SESSION, SET_ADMIN_QUEST, ADD_QUEST} from "../type"

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
        
        case ADD_QUEST :
            let buffQuestList = state.questList
            buffQuestList.push(action.payload)
            return {
                ...state,
                questList: buffQuestList
            }
        
        case CLEAR_SESSION :
            return initialState

        default :
            return state
    }
}