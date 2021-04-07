import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_USER_DAILY,
    ADD_DAILY,
    EDIT_DAILY,
    DELETE_DAILY,
    LOADING_DAILY,
    SUCCESS_LOADING_DAILY
} from "../type"

import {getClientUserId} from './userAction'

export const getUserDaily = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getUserDaily',{clientUserId: clientUserId})
        .then((res) => {
            let set_data = []
            res.data.data.map((item) => {
                let time = item.createdAt.split(',')[1]
                let date = item.createdAt.split(',')[0]
                let month = date.split('/')[0]
                let day = date.split('/')[1]
                let year = date.split('/')[2]
                let new_createdAt = `${day}/${month}/${year},${time}`
                item.createdAt = new_createdAt
                set_data.push(item)
            })
            dispatch({type: SET_USER_DAILY, payload: set_data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const addDaily = (dailyData) => (dispatch) => {
    dispatch({type: LOADING_DAILY})
    let clientUserId = getClientUserId()
    dailyData.clientUserId = clientUserId
    axios.post('/addDaily',dailyData)
        .then((res) => {
            dispatch({type: ADD_DAILY, payload: res.data.data})
            dispatch({type:SUCCESS_LOADING_DAILY})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type:SUCCESS_LOADING_DAILY})
        })
}

export const editDaily= (dailyData,docId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/editDaily',{update_data: dailyData, docId, clientUserId})
        .then((res) => {
            dispatch({type: EDIT_DAILY, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
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
