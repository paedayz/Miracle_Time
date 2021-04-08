import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_USER_DATA, 
    SET_EVENT, 
    CLEAR_SESSION, 
    SET_NOTIFICATIONS,
    SET_UNREAD_NOTI,
    SET_FRIEND_REQUEST,
    SET_FRIEND_LIST,
    SET_QUEST,
    SET_COIN_EXP_LVL,
    SET_ACHIEVE,
    SET_ERROR,
    IS_GET_DATA,
    SET_USER_SETTING,
    SELECT_OPEN_MOOD
} from '../type'
import firebase from 'firebase'

require('firebase/storage')

let clientUserId

export const getAuthen = ()=> (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.post('/authen', {clientUserId : clientUserId}).then((res) => {
        if(res.data.eventData.length !== 0) {
            dispatch({type: SET_EVENT, payload: res.data.eventData})
        }

        if(res.data.notiData.length !== 0) {
            dispatch({type: SET_NOTIFICATIONS, payload: res.data.notiData})
            dispatch({type: SET_UNREAD_NOTI, payload: true})
        }

        if(res.data.settingData.length !== 0) {
            console.log(res.data.settingData)
            dispatch({type: SET_USER_SETTING, payload: res.data.settingData})
        }

        dispatch({type: IS_GET_DATA})
        dispatch({type: LOADING_COMPLETE})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: LOADING_COMPLETE})
    })
}

export const login = (userData) => (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.post('/login', userData).then((res) => {
        clientUserId = res.data.data.userId
        let coin_exp_lvl = {
            coin : res.data.data.coin,
            exp : res.data.data.exp,
            level : res.data.data.level
        }
        dispatch({type: SET_USER_DATA, payload: res.data.data})
        dispatch({type: SET_COIN_EXP_LVL, payload: coin_exp_lvl})
        dispatch({type: LOADING_COMPLETE})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: SET_ERROR, payload: 'Login Failed'})
        dispatch({type: LOADING_COMPLETE})
    })
}

export const register = (userData, setMode) => (dispatch) => {
    axios.post('/signup', userData)
        .then((res) => {
            dispatch({type: SET_USER_DATA, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
            setMode(false)
            dispatch({type: SET_ERROR, payload: 'Register Failed'})
        })
}

export const signout = () => (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.get('/signout')
        .then((res) => {
            dispatch({type: SET_USER_DATA, payload: null})
            dispatch({type: LOADING_COMPLETE})
            dispatch({type: CLEAR_SESSION})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}

export const editProfile = (blob, updateData) => (dispatch) => {
    dispatch({type: LOADING_DATA})
    if(blob) {
        const imageName = blob._data.name
        updateData.imageName = imageName
        updateData.clientUserId = clientUserId

        const task = firebase.storage().ref().child(imageName).put(blob);

        const taskProgress = snapshot => {
            console.log('inprogress')
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log('success')
            })
            console.log(imageName)
            axios.post('/editProfile', updateData)
                .then((res) => {
                    dispatch({type: SET_USER_DATA, payload: res.data.data})
                    dispatch({type: LOADING_COMPLETE})
                })
                .catch((err) => {
                    dispatch({type: LOADING_COMPLETE})
                    console.log(err)
                })
        }

        const taskError = snapshot => {
            console.log('errors')
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
        
    } else {
        updateData.imageName = null
        updateData.clientUserId = clientUserId
        console.log('dont have blob')
        axios.post('/editProfile', updateData)
                .then((res) => {
                    dispatch({type: SET_USER_DATA, payload: res.data.data})
                    dispatch({type: LOADING_COMPLETE})
                })
                .catch((err) => {
                    dispatch({type: LOADING_COMPLETE})
                    console.log(err)
                })
    }
}

export const getClientUserId = () => {
    return clientUserId
}

export const setSelectMood = (docId, set_data) => (dispatch) => {
    let clientUserId = getClientUserId()
    axios.post('/setSelectMood', {clientUserId: clientUserId, docId, set_data})
        .then((res) => {
            dispatch({type: SELECT_OPEN_MOOD, payload: res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
}