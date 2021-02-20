import axios from 'axios'
import { LOADING_DATA, 
    LOADING_COMPLETE ,
    ACCEPT_FRIEND, 
    DENIED_FRIEND, 
    SET_FRIEND_REQUEST,
    SET_SUCCESS,
    SET_FRIEND_ERROR,
    LOADING_FRIEND_DATA,
    LOADING_FRIEND_COMPLETE,
} from '../type'

import {getClientUserId} from './userAction'



export const getFriendRequest = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/getFriendRequest', {clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: SET_FRIEND_REQUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const addFriend = (recipient) => (dispatch) => {
    let clientUserId = getClientUserId()
    dispatch({type: LOADING_FRIEND_DATA})
    axios.post('/addFriend',{recipient: recipient, clientUserId: clientUserId})
        .then((res) => {
            console.log(res.data)
            dispatch({type: SET_SUCCESS, payload: 'AddFriend success'})
            dispatch({type: LOADING_FRIEND_COMPLETE})
        })
        .catch((err) => {
            dispatch({type: SET_FRIEND_ERROR, payload: 'AddFriend error'})
            console.log(err)
            dispatch({type: LOADING_FRIEND_COMPLETE})
        })
}

export const acceptFriendRequest = (docId, sender, setIsList) => (dispatch) =>{
    let clientUserId = getClientUserId()
    axios.post('/acceptFriendRequest', {docId:docId, sender:sender, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type:ACCEPT_FRIEND, payload: res.data.data})
            setIsList(true)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deniedFriendRequest = (docId, sender) => (dispatch) =>{
    let clientUserId = getClientUserId()
    axios.post('/deniedFriendRequest', {docId:docId, sender:sender, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type:DENIED_FRIEND, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}