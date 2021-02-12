import axios from 'axios'
import { LOADING_DATA, LOADING_COMPLETE ,ACCEPT_FRIEND, DENIED_FRIEND, SET_FRIEND_REQUEST} from '../type'

import {getClientUserId} from './userAction'

let clientUserId = getClientUserId()

export const getFriendRequest = () => (dispatch) => {
    console.log('getFriendReqqqq')
    console.log(clientUserId)
    axios.post('/getFriendRequest', {clientUserId: clientUserId})
        .then((res) => {
            console.log(res.data)
            dispatch({type: SET_FRIEND_REQUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const addFriend = (recipient) => {
    axios.post('/addFriend',{recipient: recipient, clientUserId: clientUserId})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const acceptFriendRequest = (docId, sender, setIsList) => (dispatch) =>{
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
    axios.post('/deniedFriendRequest', {docId:docId, sender:sender, clientUserId: clientUserId})
        .then((res) => {
            dispatch({type:DENIED_FRIEND, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}