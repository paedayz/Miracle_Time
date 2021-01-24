import axios from 'axios'
import {LOADING_DATA, LOADING_COMPLETE, SET_USER_DATA, SET_EVENT, CLEAR_SESSION} from '../type'

export const getAuthen = ()=> (dispatch) => {
    dispatch({type: LOADING_DATA})
    axios.get('/authen').then((res) => {
        if(res.data.userData) {
            console.log('user')
            dispatch({type: SET_USER_DATA, payload: res.data.userData})
        }
        if(res.data.eventData) {
            console.log('events')
            dispatch({type: SET_EVENT, payload: res.data.eventData})
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
        console.log('success')
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

export const uploadImage = (image) => {
    console.log(image._parts[0][1])
    axios.post('/uploadImage', image._parts[0][1]).then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}