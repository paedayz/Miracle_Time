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
    TOGGLE_NOTI
} from "../type"

const initialState = {
    user: {},
    data: [],
    events: [],
    notifications: [],
    unreadNoti : 0,
    will_noti : [],
    now_noti : [],
    end_noti : []
}

const startState = {
    user: {},
    data: [],
    events: [],
    notifications: [],
    unreadNoti : 0,
    will_noti : [],
    now_noti : [],
    end_noti : []
}

export default function (state = initialState, action){
    switch (action.type) {
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
            nowEvent.map((event) => {
                if(event.key !== action.payload) {
                    newEvent.push(event)
                }
            })
            return {
                ...state,
                events: newEvent
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
            
        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}