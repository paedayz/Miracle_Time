import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_EVENT, 
    ADD_EVENT, 
    DELETE_EVENT, 
    EDIT_EVENT, 
    ADD_NOTIFICATIONS, 
    SET_UNREAD_NOTI,
    READ_NOTI,
    TOGGLE_NOTI,
    DELETE_NOTI,
    DO_QUEST,
    SET_QUEST,
    SET_USER_DATA,
    CLAIM_QUEST,
    SET_COIN_EXP_LVL,
    SET_ACHIEVE,
    DO_ACHIEVE
} from "../type"

import {getClientUserId} from './userAction'

export const getAllEvents = () => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_DATA})
    axios.post('/getAllEvents', {clientUserId : clientUserId})
        .then((res) => {
            dispatch({type: "SET_EVENT", payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const addEvent = (eventData) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_DATA})
    eventData.clientUserId = clientUserId
    axios.post('/addEvent', eventData)
        .then((res) => {
            dispatch({type: ADD_EVENT, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const editEvent = (eventData) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_DATA})
    eventData.clientUserId = clientUserId
    axios.post('/editEvent', eventData)
        .then((res) => {
            dispatch({type: EDIT_EVENT, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const deleteEvent = (eventKey) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_DATA})
    axios.post('/deleteEvent', {eventKey : eventKey, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: DELETE_EVENT, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const addNotifications = (type, data) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/addNotifications', {type:type, data:data, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: ADD_NOTIFICATIONS, payload: res.data.data})
            dispatch({type: SET_UNREAD_NOTI, payload: false})
            
        })
        .catch((err) => {
            console.log(err)
        })
}

export const readNotifications = (notiToRead) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/readNotifications', {clientUserId: clientUserId, docIds: notiToRead})
        .then((res) => {
            dispatch({type: READ_NOTI, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const toggleNotifications = (notiDocId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/toggleNotifications', {clientUserId: clientUserId, docId: notiDocId})
        .then((res) => {
            dispatch({type: TOGGLE_NOTI, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteNotifications = (notiDocId) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: DELETE_NOTI, payload: notiDocId})
    axios.post('/deleteNotifications', {clientUserId: clientUserId, docId: notiDocId})
        .then((res) => {
            console.log('delete success')
        })
        .catch((err) => {
            console.log(err)
        })
}

export const doQuest = (questAction) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/doQuest', {clientUserId: clientUserId, questAction: questAction})
        .then((res) => {
            dispatch({type: DO_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getUserQuest = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getUserQuest', {clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: SET_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const claimQuest = (docId, questId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/claimQuest', {clientUserId: clientUserId, docId: docId, questId: questId})
        .then((res) => {
            let coin_exp_lvl = {
                coin : res.data.data.coin,
                exp : res.data.data.exp,
                level : res.data.data.level
            }
            dispatch({type: SET_COIN_EXP_LVL, payload: coin_exp_lvl})
            dispatch({type: CLAIM_QUEST, payload: docId})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const doAchievement = (achievementAction) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/doAchievement', {clientUserId: clientUserId, achievementAction: achievementAction})
        .then((res) => {
            dispatch({type: DO_ACHIEVE, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getUserAchievement = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getUserAchievement', {clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: SET_ACHIEVE, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}