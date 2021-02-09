import {
    SET_EVENT, 
    EDIT_EVENT, 
    ADD_EVENT,
    DELETE_EVENT,
    CLEAR_SESSION,
    ADD_NOTIFICATIONS,
    SET_NOTIFICATIONS,
    SET_UNREAD_NOTI
} from "../type"

const initialState = {
    user: {},
    data: [],
    events: [],
    notifications: [
        {
        "createdAt": "2/9/2021, 6:25:51 PM",
        "data":  {
          "eventData":  {
            "catagory": "ทั่วไป",
            "date": "2021-02-25",
            "detail": "with family",
            "end": "15:20",
            "event": "Eat lunch",
            "key": "0.5724287889047687",
            "rank": "3",
            "start": "20:52",
          },
          "status": "now",
          "time": "20 minute",
        },
        "docId": "qFYl7HhTABsSaTPylUUo",
        "read": false,
        "toggle": false,
        "type": "event",
      },
      {
        "createdAt": "2/9/2021, 6:25:51 PM",
        "data":  {
          "eventData":  {
            "catagory": "ทั่วไป",
            "date": "2021-02-25",
            "detail": "with family",
            "end": "15:20",
            "event": "Eat lunch",
            "key": "0.57242878890547687",
            "rank": "3",
            "start": "20:52",
          },
          "status": "now",
          "time": "20 minute",
        },
        "docId": "qFYl7HhTABsSaTPy5lUUo",
        "read": false,
        "toggle": false,
        "type": "event",
      },
    ],
    unreadNoti : 0
}

const startState = {
    user: {},
    data: [],
    events: [],
    notifications: [],
    unreadNoti : 0
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
            
        case CLEAR_SESSION :
            return startState

        default :
            return state
    }
}