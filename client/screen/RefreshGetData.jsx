import React, {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//Redux
import {useSelector, useDispatch} from 'react-redux'
import {addNotifications} from '../redux/action/dataAction'

export default function RefreshGetData()  {
    const [buff ,setBuff] = useState(true)
    const userEvents = useSelector(state => state.data.events)
    const currentWillNoti = useSelector(state => state.data.will_noti)
    const currentNowNoti = useSelector(state => state.data.now_noti)
    const currentEndNoti = useSelector(state => state.data.end_noti)
    const dispatch = useDispatch()

    dayjs.extend(relativeTime);
    
    const checkSendNoti = () => {
        userEvents.map((event) => {
        const startDateTime = `${event.date} ${event.start}`
        const endDateTime = `${event.date} ${event.end}`

        const stringStartDateTime = dayjs(startDateTime).fromNow()
        const stringEndDateTime = dayjs(endDateTime).fromNow()

        const seperateStartDayjs = stringStartDateTime.split(" ")
        const seperateEndDayjs = stringEndDateTime.split(" ")

        if(seperateStartDayjs[0] === 'in' && seperateStartDayjs[2] === 'few' && seperateStartDayjs[3] === 'seconds') {
            if(!checkHaveNoti(event.key, currentNowNoti)) {
            let nowNotiAddData
            nowNotiAddData = {
                status : "now", 
                eventData: event
            }
            dispatch({type: 'ADD_NOW_NOTI', payload: event.key})
            dispatch(addNotifications('event', nowNotiAddData))
            }
        }

        if(seperateStartDayjs[0] === 'in' && seperateStartDayjs[2] === 'minutes') {
            const minute = stringStartDateTime.split(' ')[1]
            const intMinute = parseInt(minute, 10);
            let willNotiAddData ={}
            let haveWillNoti = checkHaveNoti(event.key, currentWillNoti)
            if (intMinute === 15 && haveWillNoti === false) {
            dispatch({type: 'ADD_WILL_NOTI', payload: event.key})
            willNotiAddData = {
                status : "will", 
                time : "15 minute", 
                eventData: event
            }
            dispatch(addNotifications('event', willNotiAddData))
            }
        }

        if(seperateEndDayjs[0] === 'in' && seperateEndDayjs[2] === 'minutes') {
            const minute = stringStartDateTime.split(' ')[1]
            const intMinute = parseInt(minute, 10);
            let endNotiAddData ={}
            let haveEndNoti = checkHaveNoti(event.key, currentEndNoti)
            if (intMinute === 15 && haveEndNoti === false) {
            endNotiAddData = {
                status : "end", 
                time : "15 minute", 
                eventData: event
            }
            dispatch({type: 'ADD_END_NOTI', payload: event.key})
            dispatch(addNotifications('event', endNotiAddData))
            }
        }
        })
    }

    const checkHaveNoti = (eventKey, currentNoti) => {
        let flag = 0
        currentNoti.map((notiKey) => {
        if(notiKey === eventKey) flag = 1
        })
        if (flag === 0) {
        return false
        } else {
        return true
        }
    }

    useEffect(() => {
        setTimeout(function(){
            setBuff(!buff)
            checkSendNoti()
            console.log('get data')
          },4000);
    }, [buff])
    return (
        <></>
    )
}