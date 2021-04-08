import {SET_USER_DATA, CLEAR_SESSION, SET_USER_SETTING, SELECT_OPEN_MOOD} from '../type'

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
        
        case SELECT_OPEN_MOOD :
            let new_setting = state.setting
            new_setting.select_mood = action.payload
            return {
                ...state,
                setting: new_setting
            }

        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}