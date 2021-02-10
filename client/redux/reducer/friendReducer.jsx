import {LOADING_DATA, LOADING_COMPLETE, CLEAR_SESSION} from "../type"

const initialState = {
    list: ['wow'],
    request: ['zaa']
}

export default function (state = initialState, action){
    switch (action.type) {
        default :
            return state
    }
}