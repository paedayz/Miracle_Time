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
    READ_NOTI
} from "../type"

import {getClientUserId} from './userAction'

let clientUserId = getClientUserId()

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