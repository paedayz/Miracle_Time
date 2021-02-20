import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_ADMIN_QUEST,
    ADD_QUEST,
    DELETE_QUEST,
    EDIT_QUEST
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

export const deleteQuest = (questId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/deleteQuest', {clientUserId: clientUserId, questId: questId})
        .then((res) => {
            dispatch({type: DELETE_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const editQuest = (updateQuestData, questId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/editQuest', {clientUserId: clientUserId, updateQuestData: updateQuestData, questId:questId})
        .then((res) => {
            dispatch({type: EDIT_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}