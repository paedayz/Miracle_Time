import {SET_DATA, ADD_EVENT,DELETE_EVENT} from "../type"

const initialState = {
    user: {},
    data: {},
    events: [
        {
            Event: 'Event A',
            time: '13.00-13.30', 
            detail: 'LLLLL', 
            key: '1.0',
            rank:'1'
        }
    ]
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_DATA :
            let nowEvents = state.events
            let newEvents = []
            console.log('nowEvent-----',nowEvents)
            nowEvents.map((event) => {
                if(event.key === action.payload.key) {
                    event = action.payload
                }
                newEvents.push(event)
            })
            console.log('newEvent-----',newEvents)
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
                if(event.key !== action.payload.key) {
                    newEvent.push(event)
                }
            })
            return {
                ...state,
                events: newEvent
            }



        default :
            return state
    }
}