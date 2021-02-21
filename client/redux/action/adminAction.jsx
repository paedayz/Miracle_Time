import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_ADMIN_QUEST,
    ADD_QUEST,
    DELETE_QUEST,
    EDIT_QUEST,
    SET_ADMIN_ACHIEVE,
    ADD_ACHIEVE,
    DELETE_ACHIEVE,
    EDIT_ACHIEVE,
} from "../type"

import {getClientUserId} from './userAction'

export const getAdminQuestList = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/adminGetQuestList',{clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: SET_ADMIN_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const addQuest = (questData) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/addQuest', {clientUserId: clientUserId, questData: questData})
        .then((res) => {
            dispatch({type: ADD_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteQuest = (questId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/deleteQuest', {clientUserId: clientUserId, questId: questId})
        .then((res) => {
            dispatch({type: DELETE_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const editQuest = (updateQuestData, questId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/editQuest', {clientUserId: clientUserId, updateQuestData: updateQuestData, questId:questId})
        .then((res) => {
            dispatch({type: EDIT_QUEST, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getAdminAchievementList = () => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/adminGetAchievementList',{clientUserId: clientUserId})
        .then((res) => {
            dispatch({type: SET_ADMIN_ACHIEVE, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const addAchievement = (achievementData) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/addAchievement', {clientUserId: clientUserId, achievementData: achievementData})
        .then((res) => {
            dispatch({type: ADD_ACHIEVE, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteAchievement = (achievementId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/deleteAchievement', {clientUserId: clientUserId, achievementId: achievementId})
        .then((res) => {
            console.log(res.data.data)
            dispatch({type: DELETE_ACHIEVE, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

export const editAchievement = (updateAchievementData, achievementId) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/editAchievement', {clientUserId: clientUserId, updateAchievementData: updateAchievementData, achievementId:achievementId})
        .then((res) => {
            dispatch({type: EDIT_ACHIEVE, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}