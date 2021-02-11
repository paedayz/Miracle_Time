import axios from 'axios'
import { LOADING_DATA, LOADING_COMPLETE ,ACCEPT_FRIEND} from '../type'

export const addFriend = (recipient) => {
    axios.post('/addFriend',{recipient: recipient})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const acceptFriendRequest = (docId, sender, setIsList) => (dispatch) =>{
    axios.post('/acceptFriendRequest', {docId:docId, sender:sender})
        .then((res) => {
            dispatch({type:ACCEPT_FRIEND, payload: res.data.data})
            setIsList(true)
        })
        .catch((err) => {
            console.log(err)
        })
}