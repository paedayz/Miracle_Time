import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_USER_DAILY,
    ADD_DAILY,
    EDIT_DAILY,
    DELETE_DAILY
} from "../type"

import {getClientUserId} from './userAction'

export const getUserDaily = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getUserDaily',{clientUserId: clientUserId})
        .then((res) => {
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
            dispatch({type: ADD_DAILY, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const editDaily= (dailyData,docId) => (dispatch) => {
    let clientUserId = getClientUserId()
    console.log('test editDaily--------')
    dispatch({type: LOADING_DATA})
    axios.post('/editDaily',{update_data: dailyData, docId, clientUserId})
        .then((res) => {
            console.log('test editDaily path')
            dispatch({type: EDIT_DAILY, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const deleteDaily = (dailyDocId) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_DATA})
    axios.post('/deleteDaily', {clientUserId: clientUserId, docId: dailyDocId})
        .then((res) => {
            dispatch({type: DELETE_DAILY, payload: dailyDocId})
            dispatch({type: LOADING_COMPLETE})
            console.log('delete success')
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}
