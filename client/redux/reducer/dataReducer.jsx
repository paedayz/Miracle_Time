import {
    SET_EVENT, 
    EDIT_EVENT, 
    ADD_EVENT,
    DELETE_EVENT,
    CLEAR_SESSION,
    ADD_NOTIFICATIONS,
    SET_NOTIFICATIONS,
    SET_UNREAD_NOTI,
    ADD_WILL_NOTI,
    ADD_NOW_NOTI,
    ADD_END_NOTI,
    READ_NOTI,
    TOGGLE_NOTI,
    DELETE_NOTI,
    SET_QUEST,
    DO_QUEST,
    CLAIM_QUEST,
    SET_COIN_EXP_LVL,
    SET_ACHIEVE,
    TOGGLE_EVENT_SUCCESS,
    SET_DATA_CLEAR,
    SET_DATA_ERROR,
    IS_GET_DATA,
    SET_DASHBOARD_EVENT,
    SET_USER_DAILY,
    ADD_DAILY,
    EDIT_DAILY,
    DELETE_DAILY,
    LOADING_DAILY,
    SUCCESS_LOADING_DAILY,
    SET_COIN
} from "../type"

const initialState = {
    user: {},
    coin: 0,
    exp: 0,
    level: 0,
    data: [],
    events: [],
    notifications: [],
    unreadNoti : 0,
    will_noti : [],
    now_noti : [],
    end_noti : [],
    questList: [],
    achievementList: [],
    dashboardEvent: [],
    daily:[],
    loading_daily: false,
    error: null,
    isGetData: false
}

const startState = {
    user: {},
    coin: 0,
    exp: 0,
    level: 0,
    data: [],
    events: [],
    notifications: [],
    unreadNoti : 0,
    will_noti : [],
    now_noti : [],
    end_noti : [],
    questList: [],
    achievementList: [],
    dashboardEvent: [],
    daily:[],
    loading_daily: false,
    error: null,
    isGetData: false
}

export default function (state = initialState, action){
    switch (action.type) {
        case IS_GET_DATA: 
             return {
                 ...state,
                 isGetData: true
             }
        case SET_EVENT :
            return {
                ...state,
                events : action.payload
            }

        case EDIT_EVENT :
            let nowEvents = state.events
            let newEvents = []
            nowEvents.map((event) => {
                if(event.key === action.payload.key) {
                    event = action.payload
                }
                newEvents.push(event)
            })
            return {
                ...state,
                events: newEvents
            }

        case ADD_EVENT :
            let newList = state.events
            newList.push(action.payload)
            return {
                ...state,
                events: newList
            }
        case DELETE_EVENT :
            let  nowEvent = state.events
            let  newEvent = []
            let newNoti = []
            nowEvent.map((event) => {
                if(event.key !== action.payload) {
                    newEvent.push(event)
                }
            })

            state.notifications.map((noti) => {
                let flag = 0
                action.notiArray.map((notId) => {
                    if(noti.docId === notId) {
                        flag = 1
                    }
                })
                if(flag === 0) {
                    newNoti.push(noti)
                }
                
            })
            return {
                ...state,
                events: newEvent,
                notifications: newNoti
            }

        case TOGGLE_EVENT_SUCCESS :
            let eventBuff = []
            state.events.map((event) => {
                if(event.docId === action.payload) {
                    event.success = true
                }
                eventBuff.push(event)
            })
            return {
                ...state,
                events: eventBuff
            }

        case ADD_NOTIFICATIONS :
            let nowNoti = state.notifications
            nowNoti.push(action.payload)

            return{
                ...state,
                notifications : nowNoti
            }

        case SET_NOTIFICATIONS :
            return {
                ...state,
                notifications : action.payload
            }
        
        case SET_UNREAD_NOTI :
            let num = 0
            state.notifications.map((noti) => {
                if(!noti.read) {
                num = num + 1
                }
            })
            return {
                ...state,
                unreadNoti : num
            }
        case ADD_WILL_NOTI :
            let new_will_noti = state.will_noti
            new_will_noti.push(action.payload)
            return {
                ...state,
                will_noti: new_will_noti
            }

        case ADD_NOW_NOTI :
            let new_now_noti = state.now_noti
            new_now_noti.push(action.payload)
            return {
                ...state,
                now_noti: new_now_noti
            }

        case ADD_END_NOTI :
            let new_end_noti = state.end_noti
            new_end_noti.push(action.payload)
            return {
                ...state,
                end_noti: new_end_noti
            }

        case READ_NOTI :
            let buff_noti = state.notifications
            let docIds = action.payload
            let flag_change_noti = []
            num = 0
            buff_noti.map((noti, index) => {
                for (i=0; i< docIds.length; i++) {
                    if(noti.docId === docIds[i]) flag_change_noti[i] = index
                }
            })

            flag_change_noti.map((notiIndex) => {
                buff_noti[notiIndex].read = true
            })

            num = 0
            state.notifications.map((noti) => {
                if(!noti.read) {
                num = num + 1
                }
            })
            
            return {
                ...state,
                notifications : buff_noti,
                unreadNoti : num
            }
        case TOGGLE_NOTI :
            buff_noti = state.notifications
            buff_noti.map((noti, index) => {
                if(noti.docId === action.payload) {
                    noti.toggle = true
                    buff_noti[index] = noti
                }
            })
            return {
                ...state,
                notifications : buff_noti
            }
        
        case DELETE_NOTI :
            buff_noti = state.notifications
            let new_noti = []
            buff_noti.map((noti) => {
                if(noti.docId !== action.payload) {
                    new_noti.push(noti)
                }
            })
            return {
                ...state,
                notifications : new_noti
            }
        
        case SET_QUEST :
            return {
                ...state,
                questList: action.payload
            }

        case DO_QUEST :
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
        
        case CLAIM_QUEST :
            let claimQuestBuff = []
            state.questList.map((quest) => {
                if(quest.docId === action.payload) {
                    quest.questStatus = 'quest_claim'
                }
                claimQuestBuff.push(quest)
            })
            return {
                ...state,
                questList: claimQuestBuff
            }

        case SET_COIN_EXP_LVL :
            return {
                ...state,
                coin: action.payload.coin,
                exp: action.payload.exp,
                level: action.payload.level
            }
        case SET_ACHIEVE :
            return {
                ...state,
                achievementList: action.payload
            }
        
        case SET_DASHBOARD_EVENT : 
            return {
                ...state,
                dashboardEvent: action.payload
            }
        
        case SET_DATA_CLEAR :
            return {
                ...state,
                error: null
            }

        case SET_DATA_ERROR :
            return {
                ...state,
                error: action.payload
            }
        
        case SET_EVENT :
            return {
                ...state,
                events : action.payload
            }
        case SET_USER_DAILY:
            return {
                ...state,
                daily : action.payload
            }
        case ADD_DAILY:
            let newDaily = [action.payload]
            newDaily = newDaily.concat(state.daily)
            return {
                ...state,
                daily: newDaily
            }
        case EDIT_DAILY :
            let nowDaily = state.daily
            let newEditDaily = []
            nowDaily.map((daily) => {
                if(daily.docId === action.payload.docId ) {
                    daily = action.payload
                }
                newEditDaily.push(daily)
            })
            return {
                ...state,
                Daily: newEditDaily
            }
        case DELETE_DAILY:
            now_daily = state.daily
            let new_daily = []
            now_daily.map((daily) => {
                if(daily.docId !== action.payload) {
                    new_daily.push(daily)
                }
            })
            return {
                ...state,
                daily : new_daily
            }            
        case LOADING_DAILY :
            return {
                ...state,
                loading_daily: true,
            }
        case SUCCESS_LOADING_DAILY :
            return {
                ...state,
                loading_daily: false,
            }
        case SET_COIN :
            return {
                ...state,
                coin: action.payload,
            }
        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}