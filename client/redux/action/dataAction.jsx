import axios from 'axios'
import {SET_DATA} from "../type"

export const getData = () => (dispatch) => {
    axios.get('/')
        .then((res) => dispatch({type: SET_DATA, payload: res.data.data}))
        .catch((err) => console.log(err))
}