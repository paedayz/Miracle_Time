import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, Image, View, TouchableOpacity, Button } from 'react-native';

//test
let today ='2021-01-20'
let Now = new Date(today+"T"+"12:00")
let Today = new Date(today)
let ToMorrow = new Date(Today)
ToMorrow.setDate(ToMorrow.getDate() + 1)
//use
let num_foreach_event = [];

export default function Ask_Advice() {

    eventData.map( item => {
        CountEvent(item.event)
        num_foreach_event.sort((a,b) => (a.start < b.start) ? 1 : ((b.start < a.start) ? -1 : 0))
    } )

    const Top_5_Event = num_foreach_event.slice(0,5)
    const randomEvent = Random(Top_5_Event)


    console.log("------------");

    // Check_Today_Task()
    // let A = Check_Today_Task()
    // console.log(A);
    const advice = Check_Today_Task() ? (" ไปทำ "+Check_Today_Task().event+" ซะนะ" ) : ("ว่างเเล้วอยาก "+randomEvent.Event_Name+" ไหมละ")
    
    // console.log("Is Adive" + advice);
    // const advice = Istoday_task_done ? randomEvent.Event_Name : Next_Task;

    return (
        <View>
           <Text>{advice}</Text> 
        </View>
    );
}

function Random (data) {
    const random = data[Math.floor(Math.random()*data.length)]
    return random
}

function CountEvent (Event_Name) {
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
    
    // eventData.map((E) => {

    //     let timeEvent = new Date(E.date+"T"+E.end)
        
    //     // console.log(timeEvent)
    
    //     if(timeEvent > Today && timeEvent < ToMorrow && E.success === false) {
    //         // console.log(E.event)
    //         // console.log("-----------***---------")
    //     }
    // })

    let Today_task = eventData.filter((E) => {
        let timeEvent = new Date(E.date+"T"+E.end)
        if(timeEvent > Today && timeEvent < ToMorrow && E.success === false)return true;
    })
    // console.log(Today_task.length === 0)
    
    if(Today_task.length == 0 )return false;
    else {
        Today_task.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0))
        
        // const [Next, setNext] = useState(Next_Task(Today_task)) 
        let Next = Next_Task(Today_task)

        console.log(Next)

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

const eventData = [
    { 
        date : "2021-01-19",
        detail : "with family",
        event : "Running",
        key : "1",
        rank : "2",
        start: "05:00",
        end: "06:00",
        catagory: "ออกกำลัง",
        success : false
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Running 2",
        key : "2",
        rank : "2",
        start: "17:00",
        end: "18:00",
        catagory: "ออกกำลัง",
        success : true
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Hobby",
        key : "3",
        rank : "4",
        start: "13:00",
        end: "15:00",
        catagory: "พักผ่อน",
        success : true
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "sleep",
        key : "4",
        rank : "4",
        start: "20:00",
        end: "23:00",
        catagory: "พักผ่อน",
        success : false
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Pet",
        key : "5",
        rank : "4",
        start: "09:00",
        end: "10:00",
        catagory: "พักผ่อน",
        success : false
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "LOL",
        key : "6",
        rank : "4",
        start: "21:00",
        end: "22:00",
        catagory: "พักผ่อน",
        success : false
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Learn Gen",
        key : "7",
        rank : "4",
        start: "08:30",
        end: "12:00",
        catagory: "เรียน",
        success : false
    },
    {
        date : "2021-01-19",
        detail : "with family",
        event : "Lunch ",
        key : "8",
        rank : "4",
        start: "12:00",
        end: "13:00",
        catagory: "พักผ่อน",
        success : false
    },
    {
        date : "2021-01-20",
        detail : "with family",
        event : "Lunch ",
        key : "9",
        rank : "4",
        start: "12:00",
        end: "13:00",
        catagory: "พักผ่อน",
        success : true
    },
    {
        date : "2021-01-20",
        detail : "with family",
        event : "LOL",
        key : "10",
        rank : "4",
        start: "19:00",
        end: "20:00",
        catagory: "พักผ่อน",
        success : true
    },
    {
        date : "2021-01-20",
        detail : "with family",
        event : "LOL",
        key : "11",
        rank : "4",
        start: "20:00",
        end: "21:00",
        catagory: "พักผ่อน",
        success : false
    },
    {
        date : "2021-01-21",
        detail : "with family",
        event : "Go Home",
        key : "12",
        rank : "4",
        start: "08:00",
        end: "10:00",
        catagory: "กลับบ้าน",
        success : true
    },
    {
        date : "2021-01-21",
        detail : "with family",
        event : "fishing",
        key : "13",
        rank : "4",
        start: "13:00",
        end: "15:00",
        catagory: "พักผ่อน",
        success : true
    },
    {
        date : "2021-01-21",
        detail : "with family",
        event : "LOL",
        key : "14",
        rank : "4",
        start: "17:00",
        end: "18:00",
        catagory: "พักผ่อน",
        success : true
    },
    

]









