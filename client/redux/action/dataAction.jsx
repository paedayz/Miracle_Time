import axios from 'axios'
import {LOADING_DATA, LOADING_COMPLETE, SET_EVENT, ADD_EVENT, DELETE_EVENT, EDIT_EVENT, ADD_NOTIFICATIONS} from "../type"

export const getAllEvents = () => (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.get('/getAllEvents')
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
    axios.post('/deleteEvent', {eventKey : eventKey})
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
    axios.post('/addNotifications', {type:type, data:data})
        .then((res) => {
            dispatch({type: ADD_NOTIFICATIONS, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}