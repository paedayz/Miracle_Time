import axios from 'axios'
import {LOADING_DATA, LOADING_COMPLETE, SET_EVENT} from "../type"

export const getAllEvents = () => (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.get('/getAllEvents')
        .then((res) => {
            dispatch({type: "SET_EVENT", payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
            return res.data.data.length
        })
        .catch((err) => {
            console.log(err)
            return 0
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