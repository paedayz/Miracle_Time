import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_USER_DAILY,
    ADD_DAILY
} from "../type"

import {getClientUserId} from './userAction'

export const getUserDaily = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getUserDaily',{clientUserId: clientUserId})
        .then((res) => {
            console.log(res.data)
            dispatch({type: SET_USER_DAILY, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const addDaily = (dailyData) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_DATA})
    dailyData.clientUserId = clientUserId
    axios.post('/addDaily',dailyData)
        .then((res) => {
            console.log(res.data)
            dispatch({type: ADD_DAILY, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

