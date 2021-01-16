import {LOADING_DATA, LOADING_COMPLETE, SET_USER_DATA} from '../type'

export const getAuthen = ()=> (dispatch) => {
    axios.get('/authen').then((res) => {
        if(res.data.data) {
            dispatch({type: SET_USER_DATA, payload: res.data.data})
        }
    })
    .catch((err) => {
        console.log(err)
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
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: LOADING_COMPLETE})
        })
}