import axios from 'axios'
import {
    LOADING_DATA, 
    LOADING_COMPLETE, 
    SET_USER_DATA, 
    SET_EVENT, 
    CLEAR_SESSION, 
    SET_NOTIFICATIONS,
    SET_UNREAD_NOTI
} from '../type'
import firebase from 'firebase'
require('firebase/storage')

export const getAuthen = ()=> (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.get('/authen').then((res) => {
        // if(res.data.userData) {
        //     console.log('user')
        //     dispatch({type: SET_USER_DATA, payload: res.data.userData})
        // }
        if(res.data.eventData) {
            dispatch({type: SET_EVENT, payload: res.data.eventData})
        }

        if(res.data.notiData) {
            dispatch({type: SET_NOTIFICATIONS, payload: res.data.notiData})
            dispatch({type: SET_UNREAD_NOTI, payload: true})
        }
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
        dispatch({type: SET_USER_DATA, payload: res.data.data})
        dispatch({type: LOADING_COMPLETE})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: LOADING_COMPLETE})
    })
}

export const register = (userData) => (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.post('/signup', userData)
        .then((res) => {
            dispatch({type: SET_USER_DATA, payload: res.data.data})
            dispatch({type: LOADING_COMPLETE})
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
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

        const task = firebase.storage().ref().child(imageName).put(blob);

        const taskProgress = snapshot => {
            console.log('inprogress')
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log('success')
            })
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