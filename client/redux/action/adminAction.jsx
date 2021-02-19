import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_ADMIN_QUEST,
    ADD_QUEST
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

export const addQuest = (questData) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/addQuest', {clientUserId: clientUserId, questData: questData})
        .then((res) => {
            dispatch({type: ADD_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}