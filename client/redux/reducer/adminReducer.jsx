import {
    LOADING_DATA,
    LOADING_COMPLETE,
    CLEAR_SESSION,
    SET_ADMIN_QUEST,
    ADD_QUEST,
    DELETE_QUEST,
    EDIT_QUEST,
    SET_ADMIN_ACHIEVE,
    ADD_ACHIEVE,
    DELETE_ACHIEVE,
    EDIT_ACHIEVE
} from "../type"

const initialState = {
    questList: [],
    achievementList: []
}

const startState = {
    questList: [],
    achievementList: []
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
            console.log(buffQuestList)
            console.log('add quest admin')
            return {
                ...state,
                questList: buffQuestList
            }
        
        case DELETE_QUEST :
            buffQuestList = []
            state.questList.map((quest) => {
                if(quest.docId !== action.payload) {
                    buffQuestList.push(quest)
                }
            })
            console.log(buffQuestList)
            console.log('delete quest admin')
            return {
                ...state,
                questList: buffQuestList
            }
        
        case EDIT_QUEST:
            let updateQuest = []
            state.questList.map((quest) => {
                if(quest.docId === action.payload.questId) {
                    updateQuest.push(action.payload)
                } else {
                    updateQuest.push(quest)
                }
            })
            return {
                ...state,
                questList: updateQuest
            }
        
        case SET_ADMIN_ACHIEVE: 
            return {
                ...state,
                achievementList: action.payload
            }
        
        case ADD_ACHIEVE :
            let buffAchievementList = state.achievementList
            buffAchievementList.push(action.payload)
            return {
                ...state,
                achievementList: buffAchievementList
            }
        
        case DELETE_ACHIEVE :
            buffAchievementList = []
            state.achievementList.map((achievement) => {
                if(achievement.docId !== action.payload) {
                    buffAchievementList.push(achievement)
                }
            })
            return {
                ...state,
                achievementList: buffAchievementList
            }
        
        case EDIT_ACHIEVE:
            let updateAchievement = []
            state.achievementList.map((achievement) => {
                if(achievement.docId === action.payload.achievementId) {
                    updateAchievement.push(action.payload)
                } else {
                    updateAchievement.push(achievement)
                }
            })
            return {
                ...state,
                achievementList: updateAchievement
            }
        
        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}