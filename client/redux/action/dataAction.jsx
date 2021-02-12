import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_EVENT, 
    ADD_EVENT, 
    DELETE_EVENT, 
    EDIT_EVENT, 
    ADD_NOTIFICATIONS, 
    SET_UNREAD_NOTI
} from "../type"

import {getClientUserId} from './userAction'

let clientUserId = getClientUserId()

export const getAllEvents = () => (dispatch) => {
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
    axios.post('/addNotifications', {type:type, data:data, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: ADD_NOTIFICATIONS, payload: res.data.data})
            dispatch({type: SET_UNREAD_NOTI, payload: false})
            
        })
        .catch((err) => {
            console.log(err)
        })
}