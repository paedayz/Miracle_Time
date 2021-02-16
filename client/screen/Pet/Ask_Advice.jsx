import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

// Redux
import {useSelector} from 'react-redux'



export default function Ask_Advice() {

    const eventData = useSelector(state => state.data.events)

    //test
    let Now = new Date()
    let Today = new Date()
    let ToMorrow = new Date()
    ToMorrow.setDate(ToMorrow.getDate() + 1)
    //use
    let num_foreach_event = [];

    const Random =(data) =>{
        const random = data[Math.floor(Math.random()*data.length)]
        return random
    }
    
    const CountEvent =(Event_Name) =>{
        if (num_foreach_event.length === 0) {
            num_foreach_event = [{Event_Name :Event_Name, start: 1}]
        }else{
            let IsPushEvent = false
            let count = num_foreach_event.length
    
            num_foreach_event.map(item => {
                count--;
                if(item.Event_Name == Event_Name){
                    item.start++;
                    IsPushEvent = true;
                }else if( !IsPushEvent && count == 0 ){
                    num_foreach_event.push({Event_Name : Event_Name, start: 1})
                }
            })
        } 
    }
    
    const Check_Today_Task = () =>{
        let Today_task = eventData.filter((E) => {
            let timeEvent = new Date(E.date+"T"+E.end)
            if(timeEvent > Today && timeEvent < ToMorrow && E.success === false)return true;
        })
        if(Today_task.length == 0 )return false;
        else {
            Today_task.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0))
        
            let Next = Next_Task(Today_task)
    
            return Next;
        }
    }
    
    const Next_Task = (Today_task) => {
    
        // const [NextTask, setNextTask] = useState('')
        // const [NotHaveTask, setNotHaveTask] = useState(true)
    
        // Today_task.map((E) => {
        //     let startEvent = Date.now(E.date+"T"+E.start)
        //     let endEvent = Date.now(E.date+"T"+E.end)
    
        //     if(startEvent < Now && endEvent > Now && NotHaveTask) {
        //         setNextTask(E)
        //         setNotHaveTask(false)
        //     }
        //     else if(startEvent > Now && endEvent > Now && NotHaveTask){
        //         setNextTask(E)
        //         setNotHaveTask(false)
        //     }
        // })
    
        let NextTask = "not thing"
        let NotHaveTask = true
    
        Today_task.map((E) => {
            let startEvent = Date.now(E.date+"T"+E.start)
            let endEvent = Date.now(E.date+"T"+E.end)
    
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
    
        return NextTask;
    }

    eventData.map( item => {
        CountEvent(item.event)
        num_foreach_event.sort((a,b) => (a.start < b.start) ? 1 : ((b.start < a.start) ? -1 : 0))
    })

    const Top_5_Event = num_foreach_event.slice(0,5)
    const randomEvent = Random(Top_5_Event)

    const advice = Check_Today_Task() ? (" ไปทำ "+Check_Today_Task().event+" ซะนะ" ) 
    : ("ว่างเเล้วอยาก "+randomEvent.Event_Name+" ไหมละ")
    
    return (
        <View>
           <Text>{advice}</Text> 
        </View>
    );
}