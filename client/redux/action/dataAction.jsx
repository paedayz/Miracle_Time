import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
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
    CLAIM_QUEST,
    SET_COIN_EXP_LVL,
    SET_ACHIEVE,
    DO_ACHIEVE,
    TOGGLE_EVENT_SUCCESS,
    SET_DASHBOARD_EVENT,
    BUY_THEME,
    BUY_LOADING,
    SET_COIN
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
    
    console.log('cccccccccccc',eventData)
    axios.post('/editEvent', eventData)
        .then((res) => {
            console.log('bbbbbbbbb',res.config.data)
            dispatch({type: EDIT_EVENT, payload: res.data.data})
            console.log('uuuuuuuuuuuuu',res.data.data)
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
            dispatch({type: DELETE_EVENT, payload: res.data.data, notiArray: res.data.notiDelArray})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const toggleEventSuccess = (docId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/toggleEventSuccess', {docId : docId, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: TOGGLE_EVENT_SUCCESS, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
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
    console.log(achievementAction)
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

export const getAdminDashBoard = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getAdminDashBoard', {clientUserId: clientUserId})
        .then((res) => {
            let setData = []
            res.data.data.map((data) => {
                data.a = new Date(data.a)
                setData.push(data)
            })
            dispatch({type: SET_DASHBOARD_EVENT, payload: setData})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const buyTheme = (setting_docId, theme_id, new_user_coin) => (dispatch) => {
    dispatch({type: BUY_LOADING})
    let clientUserId = getClientUserId()
    axios.post('/buyTheme', {clientUserId: clientUserId, setting_docId, theme_id, new_user_coin})
        .then((res) => {
            dispatch({type: BUY_THEME, payload: res.data.theme_id})
            dispatch({type: SET_COIN, payload: res.data.new_user_coin})
        })
        .catch((err) => {
            console.log(err)
        })
}