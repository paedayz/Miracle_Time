import {SET_DATA} from "../type"

const initialState = {
    user: {},
    data: [],
    events: [
        {
            Event: 'กินข้าวเที่ยง',
            time: '13.00-15.00',
            detail: 'กินกับแม่',
            rank: 1
        }
    ],
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_DATA :
            return {
                ...state,
                data: action.payload
            }
        default :
            return state
    }
}