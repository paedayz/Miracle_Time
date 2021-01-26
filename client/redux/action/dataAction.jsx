import axios from 'axios'
import {LOADING_DATA, LOADING_COMPLETE, SET_EVENT} from "../type"

export const getAllEvents = () => (dispatch) => {
    console.log('getall')
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
            dispatch({type: "SET_EVENT", payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => console.log(err))
}

export const editEvent = (eventData) => (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.post('/editEvent', eventData)
        .then((res) => {
            dispatch({type: "SET_EVENT", payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => console.log(err))
}