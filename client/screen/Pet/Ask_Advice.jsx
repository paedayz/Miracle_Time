import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

// Redux
import {useSelector} from 'react-redux'

//dayjs
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localeData from 'dayjs/plugin/localeData'


export default function Ask_Advice() {

    const eventData = useSelector(state => state.data.events)
    console.log(eventData)
    
    //Set time
    // dayjs.extend(relativeTime);
    dayjs.extend(localeData)
    dayjs.extend(utc)
    dayjs.extend(timezone)

    // dayjs.tz.setDefault(ia/Bangkok")
    const Now = new Date()
    const date = dayjs(Now.toLocaleString()).tz("Asia/Bangkok", true)
    // const date = dayjs()"As
    
    const Today = new Date(Now.toLocaleString())
    Today.setHours(0)
    Today.setMinutes(0)
    Today.setMilliseconds(0)
    const ToMorrow = new Date();
    ToMorrow.setDate(Today.getDate() + 1);
    

    let num_foreach_event = [];
    const default_task = ["อ่านหนังสือ","พักผ่อน","ดูหนัง","ฟังเพลง","เล่นเกม"]

    const Random =(data) =>{
        const random = data[Math.floor(Math.random()*data.length)]
        return random
    }
    
    const CountEvent =(Event_Name) =>{
        if (num_foreach_event.length === 0) {
            num_foreach_event = [{Event_Name :Event_Name, count_event: 1}]
        }else{
            let IsPushEvent = false
            let count = num_foreach_event.length
    
            num_foreach_event.map(item => {
                count--;
                if(item.Event_Name == Event_Name){
                    item.count_event++;
                    IsPushEvent = true;
                }else if( !IsPushEvent && count == 0 ){
                    num_foreach_event.push({Event_Name : Event_Name, count_event: 1})
                }
            })
        } 
    }
    
    const Check_Today_Task = () =>{
        if(eventData.length == 0){
            return false;
        }else{
            let Today_task = eventData.filter((E) => {
                let timeEvent = new Date(E.date+"T"+E.end)
                // console.log("Event is ",E)
                // console.log("*****")
                // console.log("Time event is ",timeEvent)
                // console.log("*****")
                if(timeEvent > Today && timeEvent < ToMorrow && E.success == false){
                // if(timeEvent < ToMorrow ){
                    // console.log("Event is ",E)
                    return true;   
                }
                // console.log("Time event is ",timeEvent)
            })
            // console.log(Today_task)
            if(Today_task.length !=0){
               Today_task.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0))
               console.log(Today_task)
                let Next = Next_Task(Today_task)
                console.log(Next)
                let words = " ไปทำ "+Next.event+" ซะนะ" 
                return " ไปทำ "+Next.event+" ซะนะ" ;     
            }else{
                return false;
            }  
        }        
    }
    
    const Next_Task = (Today_task) => {
        let NextTask = "not thing"
        let NotHaveTask = true
        let randNum = Math.floor(Math.random() * Today_task.length)
    
        Today_task.map((E) => {
            let startEvent = new Date(E.date+"T"+E.start)
            let endEvent = new Date(E.date+"T"+E.end)

            if(startEvent < Now && endEvent > Now && NotHaveTask) {
                NextTask = E
                NotHaveTask = false
            }
            else if(startEvent > Now && endEvent > Now && NotHaveTask){
                NextTask = E
                NotHaveTask = false
            }
            else{}
        })

        return Today_task[randNum];
    }

    const FreeTask=()=> {
        if(eventData.length != 0){
            eventData.map( item => {
                CountEvent(item.event)
                num_foreach_event.sort((a,b) => (a.start < b.start) ? 1 : ((b.start < a.start) ? -1 : 0))
            })
            const Top_5_Event = (num_foreach_event.length < 5) ? (num_foreach_event):(num_foreach_event.slice(0,5))
            const randomEvent = Random(Top_5_Event).Event_Name  
            return ("ว่างเเล้วอยาก "+randomEvent+" ไหมละ")
        }else{
            const randomEvent = Random(default_task);
            return ("ว่างเเล้วอยาก "+randomEvent+" ไหมละ")
        }
    }
    
    const advice = Check_Today_Task() ? (Check_Today_Task()) : (FreeTask())
    
    console.log("================================")
    // console.log("Today is ",Today)
    // console.log("Now is ",Now)
    // console.log("Tomorrow is ",ToMorrow)
    // console.log("dayjs ",Now.getTimezoneOffset())
    // console.log(typeof date)
    // console.log("Event",eventData)
    return (
        <View>
           <Text>{advice}</Text> 
        </View>
    );
}