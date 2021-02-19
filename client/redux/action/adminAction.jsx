import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_ADMIN_QUEST
} from "../type"

import {getClientUserId} from './userAction'

export const getAdminQuestList = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/adminGetQuestList',{clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: SET_ADMIN_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}