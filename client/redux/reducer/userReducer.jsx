import {
    SET_USER_DATA, 
    CLEAR_SESSION, 
    SET_USER_SETTING, 
    SELECT_OPEN_MOOD, 
    BUY_THEME, 
    BUY_LOADING, 
    SELECT_THEME_LOADING_SUCCESS,
    SELECT_THEME, 
    SELECT_THEME_LOADING
} from '../type'

const initialState = {
    userData : null,
    buy_loading : false,
    loading_select_theme: false,
    setting: []
} 

const startState = {
    userData : null,
    buy_loading : false,
    loading_select_theme: false,
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
            let new_setting_after_select_mood = state.setting
            new_setting_after_select_mood.select_mood = action.payload
            return {
                ...state,
                setting: new_setting_after_select_mood
            }

        case SELECT_THEME :
            let new_setting_after_select_theme = state.setting
            new_setting_after_select_theme.current_theme = action.payload
            return {
                ...state,
                setting: new_setting_after_select_theme,
                loading_select_theme: false
            }

        case SELECT_THEME_LOADING :
            return {
                ...state,
                loading_select_theme: true
            }

        case SELECT_THEME_LOADING_SUCCESS :
            return {
                ...state,
                loading_select_theme: false,
            }

        case BUY_THEME :
            let new_setting_after_buy = state.setting
            if(new_setting_after_buy.buy_theme){
                let new_own_theme = state.setting.buy_theme
                new_own_theme.push(action.payload)
                new_setting_after_buy.buy_theme = new_own_theme
            } else {
                new_setting_after_buy.buy_theme = [action.payload]
            }
            
            return {
                ...state,
                setting: new_setting_after_buy,
                buy_loading: false
            }

        case BUY_LOADING :
            return {
                ...state,
                buy_loading: true,
            }

        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}