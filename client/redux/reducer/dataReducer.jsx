import {SET_EVENT, EDIT_EVENT, ADD_EVENT,DELETE_EVENT, CLEAR_SESSION, ADD_NOTIFICATIONS} from "../type"

const initialState = {
    user: {},
    data: [],
    events: [],
    notifications: []
}

const startState = {
    user: {},
    data: [],
    events: [],
    notifications: []
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
            nowNoti.push({
                name: 'xxx',
                from: 'ooo'
            })

            return{
                ...state,
                notifications : nowNoti
            }
            
        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}