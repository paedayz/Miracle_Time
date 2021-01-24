<<<<<<< HEAD
import {SET_DATA, ADD_EVENT,DELETE_EVENT} from "../type"

const initialState = {
    user: {},
    data: {},
    events: [
        {
            Event: 'Event A',
            start: "19.00",
            end: "20.00",
            detail: 'LLLLL', 
            catagory: 'งาน',
            key: '1.0',
            rank:'1'
        }
    ]
=======
import {SET_EVENT, EDIT_EVENT, ADD_EVENT,DELETE_EVENT, CLEAR_SESSION} from "../type"

const initialState = {
    user: {},
    data: [],
    events: [],
>>>>>>> develop
}

export default function (state = initialState, action){
    switch (action.type) {
<<<<<<< HEAD
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
=======
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

>>>>>>> develop
        case ADD_EVENT :
            let newList = state.events
            newList.push(action.payload)
            return {
                ...state,
                events: newList
            }
<<<<<<< HEAD
=======

>>>>>>> develop
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
<<<<<<< HEAD


=======
            
        case CLEAR_SESSION :
            return initialState
>>>>>>> develop

        default :
            return state
    }
}